import React from "react";
import { Link } from "react-router";

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm my-4">
        <h1 className="navbar-brand mb-0">My app</h1>
        <div className="navbar-collapse">
          <ul className="navbar-nav nav mr-auto">
            <li className="nav-item"><Link to={`/home`} className="nav-link" activeClassName="active">Home</Link></li>
            <li className="nav-item"><Link to={`/about`} className="nav-link" activeClassName="active">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
