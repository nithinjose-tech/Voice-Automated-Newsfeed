import React from 'react';
import './myStyles.css';
import {Link, withRouter} from 'react-router-dom';



function About() {
  return (
    <div>
      <Link to='/info'><h1 className='about'>Help</h1></Link>
    </div>
  );
}

export default About;
