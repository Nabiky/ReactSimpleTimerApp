var React = require ('react');
var Clock = require ('Clock');

// var Countdown = (props) => {
//   return(
//     <h3>Countdown app</h3>
//   )
// };


var Countdown = React.createClass({
  render:function(){
    return(
      <div>
        <Clock totalSeconds={129}/>
      </div>
    ); 
  }
});

module.exports = Countdown;
