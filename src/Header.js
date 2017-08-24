import React from 'react';
import {Link} from 'react-router-dom'
const Header =()=>(
  <nav>
    <Link to='/'>Home</Link>
    {' '}
    <Link to='/about'>About</Link>
    {' '}
    <Link to='/faq'>FAQ</Link>
  </nav>
)
export default Header
