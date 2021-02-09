import React, { Component } from 'react';
import './AboutMe.scss';

class AboutMe extends Component {
  render() {
    return <section className="Sobre_Mi" id="sobreMi">
      <div className="container contentgral">
        <h2 className="d-none">Sobre Mí</h2>
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-6 h-100 education">
            <div className="container my-3">
              <h3><i className="fas fa-award"></i>&nbsp;Educación</h3>
              <div className="container">

                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h4 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <i className="fas fa-university"></i>&nbsp;Educ. Presencial
                        </button>
                      </h4>
                    </div>
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <h4 className="study">Diseñar Páginas Web con HTML y JavaScript</h4>
                        <p className="prom">SENA, dic.2019</p>
                        <h4 className="study">Especialización Tecnológica en Pruebas de Software</h4>
                        <p className="prom">SENA, sep.2018</p>
                        <h4 className="study">Testing de Software</h4>
                        <p className="prom">EAFIT, sep.2017</p>
                        <h4 className="study">Ingeniería de Sistemas</h4>
                        <p className="prom">Universidad Cooperativa de Colombia, mar.2017</p>
                        <h4 className="study d-none">Diplomado Marketing Digital</h4>
                        <p className="prom d-none">Comfenalco Antioquia, nov.2016</p>
                        <h4 className="study d-none">Diplomado Gestión y Gerencia de Proyectos</h4>
                        <p className="prom d-none">Comfenalco Antioquia, jul.2016</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h4 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <i className="fas fa-glasses"></i>&nbsp;Educ. Virtual
                        </button>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        <h4 className="study">
                          <a href="https://makaia.org/portfolio/academia-geek/" target="_blank" rel="nofollow noopener noreferrer">Desarrollo Web Back End con énfasis en Node.js</a>
                        </h4>
                        <p className="prom">Academia Geek, en curso 2021-1</p>
                        <h4 className="study">
                          <a href="https://makaia.org/portfolio/academia-geek/" target="_blank" rel="nofollow noopener noreferrer">Desarrollo Front End en React.js y aplicación de herramientas Desing Thinking</a>
                        </h4>
                        <p className="prom">Academia Geek, dic.2020-2</p>
                        <h4 className="study">
                          <a href="https://platzi.com/p/msantospineda/curso/1650-prework-2019/diploma/detalle/" target="_blank" rel="nofollow noopener noreferrer">Curso de Prework: Buenas prácticas y entorno de desarrollo</a>
                        </h4>
                        <p className="prom">Platzi, ago.2020</p>
                        <h4 className="study">
                          <a href="https://platzi.com/@msantospineda/curso/1557-git-github/diploma/detalle/" target="_blank" rel="nofollow noopener noreferrer">Curso Profesional de Git y GitHub</a>
                        </h4>
                        <p className="prom">Platzi, jun.2020</p>
                        <h4 className="study">
                          <a href="https://platzi.com/@msantospineda/curso/1244-sass/diploma/detalle/" target="_blank" rel="nofollow noopener noreferrer">Curso de SASS</a>
                        </h4>
                        <p className="prom">Platzi, may.2020</p>
                        <h4 className="study">
                          <a href="http://www.linkedin.com/learning/desarrollo-web-con-sass-coffeescript-y-emmet" target="_blank" rel="nofollow noopener noreferrer">Desarrollo Web con Sass, Coffeescript y Emmet</a>
                        </h4>
                        <p className="prom">Linkedin Learning, feb.2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6 h-100 skills">
            <div className="container my-3">
              <h3 className="card-title"><i className="fas fa-code"></i>&nbsp;Habilidades</h3>
              <div className="container cardWrapper p-0">
                <div className="card card-action">
                  <input type="checkbox" id="cardBtn" className="more" />
                  <div className="content card-rotating text-center">
                    <div className="front d-flex align-items-center flex-column h-100 mb-3">
                      <div className="card-body">
                        <div className="container-fluid">
                          <ul className="list-group list-group-flush w-100">
                            <li className="list-group-item">Maquetación Web</li>
                            <li className="list-group-item">Diseño de Interfaces</li>
                            <li className="list-group-item">Diseño Web</li>
                            <li className="list-group-item">HTML5</li>
                            <li className="list-group-item">CSS3</li>
                            <li className="list-group-item">JavaScript</li>
                            <li className="list-group-item">Bootstrap</li>
                            <li className="list-group-item">SASS</li>
                          </ul>
                        </div>
                      </div>
                      <label htmlFor="cardBtn" className="button mt-auto rotate-btn d-flex align-items-center" aria-hidden="true">
                        <i className="fas fa-redo-alt mx-auto"></i>
                      </label>
                    </div>
                    <div className="back d-flex align-items-center flex-column h-100 mb-3">
                      <div className="card-body">
                        <div className="container-fluid">
                          <ul className="list-group list-group-flush w-100">
                            <li className="list-group-item">Node.js</li>
                            <li className="list-group-item">NPM (Gestión de paquetes Node.js)</li>
                            <li className="list-group-item">React.js</li>
                            <li className="list-group-item">Vue.js</li>
                            <li className="list-group-item">Git</li>
                            <li className="list-group-item">GitHub</li>
                            <li className="list-group-item">Materialize</li>
                            <li className="list-group-item">Material-UI</li>
                          </ul>
                        </div>
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
    </section>
  }
}

export default AboutMe;