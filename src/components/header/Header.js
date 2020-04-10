import React, { Component } from 'react';
import './Header.scss';
import {NavLink, withRouter} from 'react-router-dom'

class Header extends React.Component {
  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  menuCollase = () => {
    window.$('#navbarNav').collapse('hide');
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <NavLink to="/dai_clover/" className="navbar-brand" id="logo" ></NavLink>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="hamburguer">
              <i className="fas fa-bars"></i>
              {/* <i className="fas fa-times"></i> */}
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className={this.getNavLinkClass("/dai_clover/"), "nav-item"}>
                  <NavLink to="/dai_clover/" className="nav-link" id="navLink-1" onClick={this.menuCollase} >
                    <i className="fas fa-home"></i>&nbsp;Inicio <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className={this.getNavLinkClass("/dai_clover/Sobre-Mi"), "nav-item"}>
                  <NavLink to="/dai_clover/Sobre-Mi" className="nav-link" id="navLink-2" onClick={this.menuCollase} >Sobre Mí</NavLink>
                </li>
                <li className={this.getNavLinkClass("/dai_clover/Portafolio"), "nav-item"}>
                  <NavLink to="/dai_clover/Portafolio" className="nav-link" id="navLink-3" onClick={this.menuCollase} >Portafolio</NavLink>
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