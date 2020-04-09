import React, { Component } from 'react';
import './AboutMe.scss';
import pfront from '../../../images/projects/business_cards/card_presentacion.png';
import DipIngSist from '../../../images/certificados/Diploma_Ingeniera_de_Sistemas.jpg';
import DipEsTecnPSw from '../../../images/certificados/Especialización_Tecnológica_en_Pruebas_de_Software.jpg';
import CurSass from '../../../images/certificados/platzi/Diploma_Curso_de_SASS.jpg';
import DisPagWebHtmlJs from '../../../images/certificados/sena/Diseñar_Páginas_Web_Html_Javascrip.jpg';
import DlloWebSassCoffEmmet from '../../../images/certificados/otros/Certificado_Finalizacion_DlloWeb_SassCoffeescriptEmmet.jpg';
import EafitTestSw from '../../../images/certificados/otros/Diploma_EAFIT_Testing_de_Software.jpg';
import MarketingDigt from '../../../images/certificados/otros/Diplomado_Marketing_Digital.png';
import GestiGerencPytos from '../../../images/certificados/otros/Diplomado_Gestión_Gerencia_Proyectos.png';

class AboutMe extends Component {
  render() {
    return <section className="Sobre_Mi" id="sobreMi">
      <div className="container py-5">
        <h2 className="d-none">Sobre Mí</h2>
        <header className="d-none">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="front-end-tab" data-toggle="tab" href="#front-end" role="tab" aria-controls="front-end" aria-selected="true">
                <span>Desarrollo Front End</span>
              </a>
              <a className="nav-item nav-link" id="back-end-tab" data-toggle="tab" href="#back-end" role="tab" aria-controls="back-end" aria-selected="false">
                <span>Desarrollo Back End</span>
              </a>
            </div>
          </nav>
        </header>
        <div className="tab-content container" id="nav-tabContent">
          <div className="tab-pane fade show active" id="front-end" role="tabpanel" aria-labelledby="front-end-tab">
            <div className="row justify-content-around">
              <div className="col-sm-12 col-md-6 h-100 education">
                <div className="container my-3">
                  <h3><i className="fas fa-award"></i>&nbsp;Certificaciones</h3>
                  <div className="container">
                    <div className="accordion" id="accordionExample">
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Ingeniería de Sistemas</button>
                          </h2>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            <figure className="figure">
                              <img src={DipIngSist} className="figure-img img-fluid rounded" alt="Diploma Ingeniera de Sistemas" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Especialización Tecnológica en Pruebas de Software</button>
                          </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                          <div className="card-body">
                            <figure className="figure">
                              <img src={DipEsTecnPSw} className="figure-img img-fluid rounded" alt="Especialización Tecnológica en Pruebas de Softwar" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Platzi</button>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body">
                            <figure className="figure">
                              <img src={CurSass} className="figure-img img-fluid rounded" alt="Curso de Sass" />
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="row p-0 m-0">
                          <div className="col-6 p-0">
                            <div className="card-header" id="headingThree">
                              <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">SENA</button>
                              </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                              <div className="card-body">
                                <figure className="figure">
                                  <img src={DisPagWebHtmlJs} className="figure-img img-fluid rounded" alt="Diseñar Páginas Web Con Html Y Javascrip" />
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 p-0">
                            <div className="card-header" id="headingThree">
                              <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Otros</button>
                              </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                              <div className="card-body">
                                <figure className="figure">
                                  <a className="" href="http://www.linkedin.com/learning/desarrollo-web-con-sass-coffeescript-y-emmet" target="_blank">
                                    <img src={DlloWebSassCoffEmmet} className="figure-img img-fluid rounded" alt="Certificado de Finalizacion Desarrollo Web Con Sass Coffeescript Y Emmet" />
                                  </a>
                                </figure>
                                <figure className="figure">
                                  <img src={EafitTestSw} className="figure-img img-fluid rounded" alt="Diploma EAFIT Curso Testing de Software" />
                                </figure>
                                <figure className="figure">
                                  <img src={MarketingDigt} className="figure-img img-fluid rounded" alt="Diplomado en Marketing Digital" />
                                </figure>
                                <figure className="figure">
                                  <img src={GestiGerencPytos} className="figure-img img-fluid rounded" alt="Diplomado en Gestión y Gerencia de Proyectos" />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 h-100 offset-md-1 skillsJob">
                <div className="container my-3">
                  <h3 className="card-title"><i className="fas fa-laptop-code"></i>&nbsp;Habilidades</h3>
                  <div className="container cardWrapper p-0">
                    <div className="card card-action">
                      <input type="checkbox" id="cardBtn" className="more" />
                      <div className="content card-rotating text-center">
                        <div className="front d-flex align-items-center flex-column h-100 mb-3">
                          <div className="card-body">
                            <h4 className="card-title d-none"><i className="fas fa-laptop-code"></i>&nbsp;Habilidades</h4>
                            <hr className="d-none" />
                            <div className="container-fluid">
                              <ul className="list-group list-group-flush w-100">
                                <li className="list-group-item">Maquetación Web</li>
                                <li className="list-group-item">Diseño Web</li>
                                <li className="list-group-item">Diseño de Interfaces</li>
                                <li className="list-group-item">HTML5</li>
                                <li className="list-group-item">CSS3</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">SASS</li>
                              </ul>
                            </div>
                            <hr className="d-none" />
                          </div>
                            <label htmlFor="cardBtn" className="button mt-auto rotate-btn d-flex align-items-center" aria-hidden="true">
                              <i className="fas fa-redo-alt mx-auto"></i>
                            </label>
                        </div>
                        <div className="back d-flex align-items-center flex-column h-100 mb-3">
                          <div className="card-body">
                            <h4 className="card-title d-none"><i className="fas fa-award"></i>&nbsp;Educación</h4>
                            <hr className="d-none" />
                            <div className="container-fluid">
                              <ul className="list-group list-group-flush w-100 text-right">
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">Node.js</li>
                                <li className="list-group-item">NPM (Gestión de paquetes Node.js)</li>
                                <li className="list-group-item">React.js</li>
                                <li className="list-group-item">Vue.js</li>
                                <li className="list-group-item">Git</li>
                                <li className="list-group-item">GitHub</li>
                              </ul>
                            </div>
                            <hr className="d-none" />
                          </div>
                            <label htmlFor="cardBtn" className="button mt-auto rotate-btn return d-flex align-items-center" aria-hidden="true">
                              <i className="fas fa-undo mx-auto"></i>
                            </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="tab-pane fade d-none" id="back-end" role="tabpanel" aria-labelledby="back-end-tab">
            <div className="row">
              <div className="col-sm-12 col-md-6 perfil">
                <img src={pfront} id="perfil-front" />
              </div>
              <div className="col-sm-12 col-md-6 h-100 m-auto">
                <h2 className="text-center">Maria</h2>
                <p className="text-left">Mi nombre es Maria y soy apasionada por el Diseño Web y los diferentes Diseños de Interfaces.</p>
                <p>Me prepare academicamente estudiando Ingenieria de Sistemas, Programaión de Pagínas Web y Pruebas de Software <br/> especializada en el Desarrollo y Programación Front End, me enfoco en la Maquetación, Diseño, Desarrollo y Administración de páginas web, Manejo de Base de Datos, Análisis de Sistemas y Soporte Técnico. Con competencias tales como trabajo en equipo, compromiso y proactiva.</p>
                <div className="container redes">
                  <span>
                    <a className="btn-social" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn-social" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn-social" href="#" target="_blank"><i className="fab fa-github"></i></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default AboutMe;