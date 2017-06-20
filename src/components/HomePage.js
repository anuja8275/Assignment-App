import React from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';
import Profile from '../components/Profile';
import Team from '../components/Team';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div>
      <form className="contentArea">
      <div className="row">
          <div className="col-sm-12">
              <div className="form-group">
                  <label htmlFor ="usr">UserName
                  <input type="email" className="form-control" id="usr" required/>
                  </label>
              </div>
          </div>
          
          <div className="col-sm-12">
               <div className="form-group">
                  <label htmlFor ="usr">password
                    <input type="password" className="form-control" id="password" required/>
                  </label>
                 
               </div>

          </div>

          <div className="col-sm-12">
               <Link to="fuelsavings">Sign In</Link>

          </div>
          
        </div>

         </form>

         </div>
   
  );
};

export default HomePage;



