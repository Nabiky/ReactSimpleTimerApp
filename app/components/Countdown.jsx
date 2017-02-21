var React = require ('react');
var Clock = require ('Clock');
var CountdownForm = require ('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
},

componentDidUpdate: function (prevProps,prevState) {
  if (this.state.countdownStatus !== prevState.countdownStatus) {

    switch (this.state.countdownStatus) {

      case 'started' :
         this.startTimer();
        break;
      case 'stopped'://clear button
        this.setState({count: 0});
      case 'paused':
          clearInterval(this.timer)// it's gonna leave the count wherever it was.
          this.timer = undefined;
          break;
    }
  }
},


componentWillUnmount: function () {
  //we want to clear the interval here because, when someone leaves the countdown page this
  //interval is gonna keep firing even if they go to the timer and do something else,
  clearInterval(this.timer);
  this.timer = undefined;
},

startTimer: function () {
 this.timer = setInterval( () => {

    var newCount = this.state.count - 1;
    this.setState({
      count: newCount >= 0 ? newCount  :  0 // inside a object u don't need a semicolon!
    });

    if(newCount === 0 ) {
      this.setState({
        countdownStatus: 'stopped'// very important!
      });
    }

  }, 1000);

},

handleSetCountdown: function (seconds) {
  this.setState({
    count: seconds,
    countdownStatus: 'started'
  });
},

handleStatusChange: function(newStatus){
 this.setState({countdownStatus: newStatus});
},

 render:function() {


   var{count,countdownStatus} = this.state;
   var renderControlArea = () => {
     if(countdownStatus !== 'stopped'){ //if is not equal to stopped!!
        return <Controls countdownStatus ={countdownStatus} onStatusChange={this.handleStatusChange}/>;
     }else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
     }
   };

    return(
      <div>
        <h1 className="page-title"> Countdown App </h1>
        <Clock totalSeconds={count}/>
         {renderControlArea()}
      </div>
    );
  }

});

module.exports = Countdown;

// Since componentDidUpdate gets called everytime your props or states get updated, since we only
// care if you count status changes but the componentDidUpdate gets called everytime the state gets updated like
// when the counter starts to count down every second, so we obviously wanna limit how often we call it, which is
// exactly why we will use this if statement this.state.countdownStatus !== prevState.countdownStatus.
