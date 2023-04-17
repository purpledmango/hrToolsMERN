import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import $ from 'jquery';

export default function Nav(props) {
  const burgerClicked = () => {
    $('#nav-burger').toggleClass('is-active');
    $('#nav-menu').toggleClass('is-active');
  };
  return (
    <nav className="navbar has-background-link has-shadow">
      <div className="navbar-brand ">
        <Link to="/"> 
          <h1 className="navbar-item has-text-white-bis is-size-3">HR... Tools </h1>
        </Link>
        <Link
          role="button"
          className="navbar-burger"
          id="nav-burger"
          onClick={burgerClicked}
          to={undefined}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>
      <div
        id="nav-menu"
        className="navbar-menu navbar-end has-background-link"
      >
        <Link to="/" className="navbar-item has-text-white-bis has-background-link">
          Home
        </Link>

        <Link to="/add" className="navbar-item has-text-white-bis has-background-link">
          Add
        </Link>

        <Link to="/manage" className="navbar-item has-text-white-bis has-background-link">
          Manage
        </Link>
      
      </div>
    </nav>
  );
}
