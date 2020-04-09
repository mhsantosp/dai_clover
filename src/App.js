import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/sections/home/Home';
import AboutMe from './components/sections/about-me/Sobre-Mi';
import Briefcase from './components/sections/briefcase/Portafolio';
import FrontEnd from './components/annexes/cards/FrontEnd';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Sobre-Mi" component={AboutMe} />
              <Route exact path="/Portafolio" component={Briefcase} />
            </Switch>
          </main>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
