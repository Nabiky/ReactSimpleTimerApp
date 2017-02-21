var React = require ('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var Countdown = require ('Countdown');

describe('Countdown', () => {

  it ('should exist', () => {
    expect(Countdown).toExist();
  });

 describe('handleSetCountdown', () => {

   it('should set the state to started and countdown', (done) => {
     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
     countdown.handleSetCountdown(10);

     expect(countdown.state.count).toBe(10);
     expect(countdown.state.countdownStatus).toBe('started');

     setTimeout(() => {
       expect(countdown.state.count).toBe(9);
       done();
     }, 1001 )
   });

   it('should never set count less than zero', (done) => {
     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
     countdown.handleSetCountdown(1);

    setTimeout(() => {
       expect(countdown.state.count).toBe(0);
       done();
     }, 3001 )
   });

  it('should pause countdown on paused status', (done)=> {
     var countdown = TestUtils.renderIntoDocument(<Countdown/>);
     countdown.handleSetCountdown(3);
     countdown.handleStatusChange('paused');

     setTimeout(() => {
       expect(countdown.state.count).toBe(3);
       expect(countdown.state.countdownStatus).toBe('paused');
       done();
     }, 1001);
   });

   it('should reset count on stopped', (done)=> {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
 });
});


//When you execute something asynchronously, you can move on to another task
// before it finishes.

// //Mocha test do not support Async callbacks, if you try to run the code,
// like this you need to specify a done argument,  which get pass into it(),
// it lets mocha knows that you are planning on having a Asyncronous test,
// and it should wait until done is called. to stop the test. all we need to do
// is call done() once we are done.
