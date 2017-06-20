import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import ReactDOM from 'react-dom';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="container">
            <div>  {this.props.children}</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
