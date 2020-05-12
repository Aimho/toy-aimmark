import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/axios">exampleAxios</Link>
    </li>
  </ul>
);

export default Header;
