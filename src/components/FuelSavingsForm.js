import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Profile from '../components/Profile';
import Team from '../components/Team';
import Contact from '../components/Contact';
import NavBar  from '../components/NavBar'

class FuelSavingsForm extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar/>
        <div>
            {this.props.children}
        </div>
        
      </div>
    );
  }
}



export default FuelSavingsForm;


