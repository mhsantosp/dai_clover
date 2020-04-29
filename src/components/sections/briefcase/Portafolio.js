import React, { Component } from 'react';
import './Briefcase.scss';
import ebfactory from '../../../images/projects/web_design/ebfactory.png';
import digitalbots from '../../../images/projects/web_design/digitalbots.png';
import aseoseguro from '../../../images/projects/web_design/aseoseguro.png';
import techbootcamp from '../../../images/projects/web_design/techBootcamp.png';
import cartoons from '../../../images/projects/web_design/cartoons.png';
import superheroes from '../../../images/projects/web_design/superheroes.png';
import bidcitieslab2019 from '../../../images/projects/web_design/bidcitieslab2019.png';
import innovacionnaranja from '../../../images/projects/web_design/innovacionnaranja.png';
import drupalcamp from '../../../images/projects/web_design/drupalcamp.png';
import arandaMovie from '../../../images/projects/web_design/arandaMovie.png';
import barriofiel from '../../../images/projects/web_design/barriofiel.png';
import logo1 from '../../../images/projects/logo_design/logo1.png';
import card_aptos from '../../../images/projects/business_cards/card_aptos.png';
import card_presentation from '../../../images/projects/business_cards/card_presentation.jpeg';

class Briefcase extends Component {
  render() {
    return <section className="Portafolio" id="portafolio">
      <div className="container contentgral">
        <h2 className="d-none">Portafolio</h2>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="diseño-web-tab" data-toggle="tab" href="#diseño-web" role="tab" aria-controls="diseño-web" aria-selected="true"><span>Diseño Web</span></a>
              <a className="nav-item nav-link" id="logotipos-tab" data-toggle="tab" href="#logotipos" role="tab" aria-controls="logotipos" aria-selected="false"><span>Logotipos</span></a>
              <a className="nav-item nav-link" id="business_cards-tab" data-toggle="tab" href="#business_cards" role="tab" aria-controls="business_cards" aria-selected="false"><span>Tarjetas</span></a>
            </div>
          </nav>
        </header>
        <div className="tab-content container" id="nav-tabContent">
          <div className="tab-pane fade show active" id="diseño-web" role="tabpanel" aria-labelledby="diseño-web-tab">
            <h3 className="my-3">Proyectos freelancer</h3>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={barriofiel} className="card-img-top" alt="Barrio Fiel" />
                    <div className="card-body">
                      <a href="https://barriofiel.com/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Barrio Fiel</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={drupalcamp} className="card-img-top" alt="Drupalcamp Colombia 2020" />
                    <div className="card-body">
                      <a href="https://drupalcamp.co/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Drupalcamp Colombia 2020</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={arandaMovie} className="card-img-top" alt="Aranda Movies" />
                    <div className="card-body">
                      <a href="https://mhsantosp.github.io/prueba_movies/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Aranda Movies</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="my-3">Algunos proyectos en los que participe laboralmente</h3>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={ebfactory} className="card-img-top" alt="eBFactory" />
                    <div className="card-body">
                      <a href="http://www.ebfactory.com/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">eBFactory</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={digitalbots} className="card-img-top" alt="Digital Bots" />
                    <div className="card-body">
                      <a href="http://digital-bots.com/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Digital Bots</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={aseoseguro} className="card-img-top" alt="Aseo Seguro" />
                    <div className="card-body">
                      <a href="http://aseoseguro.com/" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Aseo Seguro</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={techbootcamp} className="card-img-top" alt="Tech Bootcamp" />
                    <div className="card-body">
                      <a href="https://convocatorias.iadb.org/es/techbootcamp/inicio" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Tech Bootcamp</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={cartoons} className="card-img-top" alt="Cartoons - Caricaturas" />
                    <div className="card-body">
                      <span className="text-center">
                        <a href="https://convocatorias.iadb.org/en/cartoons-2019" className="card-link" target="_blank" rel="noopener noreferrer" >
                          <h5 className="card-title">Cartoons</h5>
                        </a>
                          &nbsp;-&nbsp;
                          <a href="https://convocatorias.iadb.org/es/caricaturas-2019" className="card-link" target="_blank" rel="noopener noreferrer" >
                          <h5 className="card-title">Caricaturas</h5>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={superheroes} className="card-img-top" alt="Superheroes" />
                    <div className="card-body">
                      <a href="https://convocatorias.iadb.org/en/superheroes" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Superheroes</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={bidcitieslab2019} className="card-img-top" alt="Bid Cities Lab 2019" />
                    <div className="card-body">
                      <a href="https://convocatorias.iadb.org/es/bidcitieslab2019" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Bid Cities Lab 2019</h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={innovacionnaranja} className="card-img-top" alt="Innovación Naranja" />
                    <div className="card-body">
                      <a href="https://convocatorias.iadb.org/es/innovacionnaranja" className="card-link" target="_blank" rel="noopener noreferrer" >
                        <h5 className="card-title">Innovación Naranja</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="logotipos" role="tabpanel" aria-labelledby="logotipos-tab">
            <h3 className="my-3 d-none">Logotipos</h3>
            <div className="container mt-3">
              <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={logo1} className="card-img-top" alt="Caseritas Arepas" style={{width: "80%", margin: "auto"}} />
                    <div className="card-body">
                      <h5 className="card-title">Caseritas Arepas</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="business_cards" role="tabpanel" aria-labelledby="business_cards-tab">
            <h3 className="my-3 d-none">Tarjetas</h3>
            <div className="container mt-3">
              <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={card_aptos} className="card-img-top" alt="Diseño Tarjeta de Acceso" style={{width: "40%", margin: "auto"}} />
                    <div className="card-body">
                      <h5 className="card-title">Diseño Tarjeta de Acceso</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card h-100">
                    <img src={card_presentation} className="card-img-top" alt="Diseño Tarjeta de Presentación" />
                    <div className="card-body">
                      <h5 className="card-title">Diseño Tarjeta de Presentación</h5>
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

export default Briefcase;