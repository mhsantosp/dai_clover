import React, { Component } from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/sections/home/Inicio';
import AboutMe from './components/sections/about-me/Sobre-Mi';
import Briefcase from './components/sections/briefcase/Portafolio';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header></Header>
          <main>
            <Switch>
              <Route exact path="/dai_clover/" component={Home} />
              <Route exact path="/dai_clover/Sobre-Mi" component={AboutMe} />
              <Route exact path="/dai_clover/Portafolio" component={Briefcase} />
            </Switch>
          </main>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
