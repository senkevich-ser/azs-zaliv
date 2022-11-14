import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/" className="logo" >
    <div className='logo__image'></div>
    <h2 className='logo__title'>Залив</h2>
  </Link>
);

export default Logo;
