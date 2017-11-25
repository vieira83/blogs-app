import React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component {

  render() {
    let isActive = {
      home: (location.pathname === "/" || location.pathname === "/home") ? "active" : "",
      about: location.pathname === "/about" ? "active" : ""
    }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-faded mb-5">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-main-nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="collapse-main-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className={`nav-item ${isActive.home}`}><Link to={`/home`} className="nav-link" >Home</Link></li>
            <li className={`nav-item ${isActive.about}`}><Link to={`/about`} className="nav-link">About</Link></li>
          </ul>
        </div>

      </nav>
    );
  }
}
