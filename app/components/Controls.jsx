var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  },

  // onStatusChange: function (newStatus){
  // return function() => {
  //   this.props.onStatusChange(newStatus);// this is what gets called when
   //someone clock the button
  // }
  // },// currying

  onStatusChange: function (newStatus){
   return () => {
  this.props.onStatusChange(newStatus);
   }
},
render: function () {
   var {countdownStatus} = this.props;
   var renderStartStopButton = () => {
     if(countdownStatus === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
     }else if (countdownStatus ==='paused'){
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
   };

   return (
     <div className="controls">
       {renderStartStopButton()}
      <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
     </div>
     )
   }
});

module.exports = Controls;



// // You can't use conditional statement inside your jsx code.
// // you need to define a function and call the fucntion right inside
// render.
