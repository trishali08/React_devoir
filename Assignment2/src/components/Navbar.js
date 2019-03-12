import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return(
    <nav>
    <div className='nav-wrapper blue darken-4'>
     <ul className='right'>
       <li><NavLink to='/home'>Home</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
     </ul>
    </div>
    </nav>
  )
}

export default Navbar;
