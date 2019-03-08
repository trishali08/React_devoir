import React from 'react';
import { Link, NavLink, withRouter} from 'react-router-dom';

const Navbar = () => {
  /*console.log('Inside Navbar Page ', props);
  setTimeout(() => {
    props.history.push('/contact');
  },2000)*/
  return(
    <nav>
    <div className='nav-wrapper blue darken-4'>
     <a href='/' className='brand-logo left'>  MERN MASTERS</a>
     <ul className='right'>
       <li><Link to='/home'>Home</Link></li>
       <li><NavLink to='/about'>About</NavLink></li>
       <li><Link to='/contact'>Contact</Link></li>
     </ul>
    </div>
    </nav>
  )
}

export default withRouter(Navbar);
