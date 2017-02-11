var React = require('react');
var Navegation = require('Navegation');


var Main = (props) => {
  return (
    <div>
      <div >
        <div>
          <Navegation/>
          <p>Main.jsx Rendered </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
