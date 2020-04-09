import React, { Component } from 'react';
import './Header.scss';
import {NavLink, withRouter}  from 'react-router-dom'

class Header extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render() {
    return (
      <header className="header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand" id="logo" ></NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className={this.getNavLinkClass("/"), "nav-item"}>
                  <NavLink to="/" className="nav-link" >
                    <i className="fas fa-home"></i>&nbsp;Inicio
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className={this.getNavLinkClass("/Sobre-Mi"), "nav-item"}>
                  <NavLink to="/Sobre-Mi" className="nav-link" >Sobre Mí</NavLink>
                </li>
                <li className={this.getNavLinkClass("/Portafolio"), "nav-item"}>
                  <NavLink to="/Portafolio" className="nav-link" >Portafolio</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
};

Header = withRouter(Header);
export default Header;