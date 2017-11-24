import React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component {

  render() {
    let isActive = {
      home: (location.pathname ==="/" || location.pathname ==="/home") ? "active" : "",
      about: location.pathname ==="/about" ? "active" : ""
    }
    return (
      <nav className="navbar navbar-expand-sm navbar-inverse ml-auto mb-5">
        <h1 className="navbar-brand mb-0">My app</h1>
        <div className="navbar-collapse">
          <ul className="navbar-nav nav ml-auto">
            <li className={`nav-item ${isActive.home}`}><Link to={`/home`} className="nav-link" >Home</Link></li>
            <li className={`nav-item ${isActive.about}`}><Link to={`/about`} className="nav-link">About</Link></li>
          </ul>
        </div>

      </nav>
    );
  }
}
