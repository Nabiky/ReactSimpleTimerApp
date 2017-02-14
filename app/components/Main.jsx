var React = require('react');
var Navegation = require('Navegation');


var Main = (props) => {
  return (
    <div>
      <Navegation/>
      <div  className="row">
        <div className="column small-centered medium-6 large-4">
           <p>Main.jsx Rendered </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
