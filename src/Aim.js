import React from 'react';
import './myStyles.css';
import {Link, withRouter} from 'react-router-dom';



function Aim() {
  return (
    <div>
      <Link to='/aimer'><h1 className='about'>Aim</h1></Link>
    </div>
  );
}

export default Aim;
