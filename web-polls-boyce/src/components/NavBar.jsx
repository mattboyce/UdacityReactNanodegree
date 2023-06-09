import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/create-question">Create Question</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
