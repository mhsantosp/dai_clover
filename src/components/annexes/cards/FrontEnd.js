import React, { Component } from 'react';
import './FrontEnd.scss';
import logotipo from '../../../images/logos/daiclover3.png';

class FrontEnd extends Component {
  render() {
    return <section className="Inicio" id="home">
      <div className="container my-5 pt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 perfil">
            <div className="container my-3">
              <div className="photo"></div>
              <h3 className="mt-0">Desarrolladora</h3>
              <p>Ingeniero de Sistemas especializada en el Desarrollo y Programación Front End, me enfoco en la Maquetación, Diseño, Desarrollo y Administración de páginas web, Manejo de Base de Datos, Análisis de Sistemas y Soporte Técnico. Con competencias tales como trabajo en equipo, compromiso y proactiva.</p>
              <div className="container redes">
                <span>
                  <a className="btn-social" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn-social" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn-social" href="#" target="_blank"><i className="fab fa-github"></i></a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="container wrapper">
              <div className="card">
                <input type="checkbox" id="masInfo" className="more" />
                <div className="content">
                  <div className="front">
                    <div className="card-body d-flex align-items-center flex-column h-100 mb-3">
                      <h4 className="card-title"><i className="fas fa-laptop-code"></i>&nbsp;Habilidades</h4>
                      <ul className="list-group list-group-flush w-100">
                        <li className="list-group-item">Maquetación Web</li>
                        <li className="list-group-item">Diseño Web</li>
                        <li className="list-group-item">Diseño de Interfaces</li>
                        <li className="list-group-item">HTML5</li>
                        <li className="list-group-item">CSS3</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">SASS</li>
                        <li className="list-group-item">JavaScript</li>
                      </ul>
                      <label htmlFor="masInfo" className="button mt-auto rotate-btn" aria-hidden="true"><i className="fas fa-redo-alt"></i></label>
                    </div>
                  </div>
                  <div className="back">
                    <div className="card-body d-flex align-items-center flex-column h-100 mb-3">
                      <h4 className="card-title"><i className="fas fa-award"></i>&nbsp;Educación</h4>
                      <h5 className="card-subtitle">Diseñar Páginas Web con HTML y Javascrip</h5>
                      <p className="prom">SENA, 08/2019</p>
                      <h5 className="card-subtitle">Especialización Tecnológica en Pruebas de Software</h5>
                      <p className="prom">SENA, 09/2018</p>
                      <h5 className="card-subtitle">Ingeniería de Sistemas</h5>
                      <p className="prom">Universidad Cooperativa de Colombia, 03/2017</p>
                      <h5 className="card-subtitle">Gestión y Gerencia de Proyectos</h5>
                      <p className="prom">Comfenalco Antioquia, 07/2016</p>
                      <label htmlFor="masInfo" className="button mt-auto rotate-btn return" aria-hidden="true">
                        <i className="fas fa-undo"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default FrontEnd;