import React from 'react';
import './myStyles.css';
import {Link, withRouter} from 'react-router-dom';
import shadows from '@material-ui/core/styles/shadows';
import logo1 from './assets/logo1.png';


function Nav() {
   const navStyle = {
        color:'yellow',
        font:'15px'
        
   };
  return (
    <nav>
        <a className="navbar-brand"><img src={logo1} alt="Logo" /></a>
        <ul className="nav-links">
                 

                 
            <Link to='/home' style={navStyle} className='shadow'>
              <li className='li'>Home</li>
            </Link>
                 
           
            <Link to='/info' style={navStyle} className='shadow'>
              <li className='li'>Help</li>
            </Link>
            <Link to='/aimer'  style={navStyle} className='shadow'>
              <li className='li'>Aim</li>
            </Link>
            <Link to='/contact'  style={navStyle} className='shadow'>
              <li className='li'>Contact</li>
            </Link>
           
        </ul>
    </nav>
  );
}

export default Nav;
