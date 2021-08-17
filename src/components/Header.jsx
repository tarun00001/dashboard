import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
    <div className="dash">Insulink</div>
    <div className="page">
      
      <ul className="menu">
        <li><Link to="/Login">Login</Link></li>
        
      </ul>
      </div>
    </header>
  );
}

export default Header;