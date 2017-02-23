var React = require ('react');
var Clock = require ('Clock');
var CountdownForm = require ('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
},
componentDidUpdate: function (prevProps,prevState) {
  if (this.state.timerStatus !== prevState.timerStatus) {

    switch (this.state.timerStatus) {

      case 'started' :
         this.handleStart();
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
//as the timer component gets remove from the screen we willc all component
//willUnmount

componentWillUnmount: function(){
  clearInterval(this.timer);
},

handleStart: function () {
  this.timer = setInterval( () => {

    this.setState({
      count: this.state.count + 1 // no semicolon in here!
    });
  }, 1000);
},


handleStatusChange: function(newTimerStatus){
 this.setState({timerStatus: newTimerStatus});
},

render:function(){
    var{count,timerStatus} = this.state;
   return(
      <div>
        <h1 className="page-title"> Timer App</h1>
        <Clock totalSeconds ={count}/>
         <Controls countdownStatus ={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }
});

module.exports = Timer;
