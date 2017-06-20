import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';


const NavBar= () => {
  return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
               <Link to="Profile"><li className="active">Profile</li></Link>
                  <Link to="Team"><li>Team</li></Link>
                 <Link to="Contact"><li>Contact</li></Link>
              </ul>
              </div>
        

          </div>
        </nav>
   
  );
};

export default NavBar;



