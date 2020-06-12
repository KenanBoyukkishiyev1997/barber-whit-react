import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul id="navigation">
      <li className="selected">
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/gallery">gallery</Link>
      </li>
      <li>
        <Link to="/blog">blog</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
