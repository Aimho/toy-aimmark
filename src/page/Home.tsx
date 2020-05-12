import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default Home;
