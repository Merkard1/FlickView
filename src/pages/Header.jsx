import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <Link href="/">FlickView</Link>
        </div>
        <nav>
          <Link className="nav-link" to="/">
            Movies
          </Link>
          <Link className="nav-link" to="/shows">
            TV Shows
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
