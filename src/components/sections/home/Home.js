import React, { Component } from 'react';
import './Home.scss';
import logotipo from '../../../images/logos/daiclover3.png';
import torreCO from '../../../images/logos/Torre-icon.png';

class Home extends Component {
  render() {
    return <section className="Inicio" id="home">
      <div className="container py-5">
        <div className="row justify-content-around">
          <div className="col-sm-12 col-md-4">
            <div className="container py-3 perfil">
              <img src={logotipo} id="logo_marcaPnal" />
            </div>
          </div>
          <div className="col-sm-12 col-md-7 offset-md-1 d-flex align-items-around">
            <div className="container my-auto perfil">
              <div className="photo"></div>
              <h3 className="mt-0 d-none">Desarrolladora</h3>
              <p>Hola! Soy Maria. <br/> Como profesional soy Ingeniera de Sistemas especializada en el Desarrollo Front End, me enfoco en la Maquetación, Diseño, Desarrollo y Administración de páginas web. <br/> Como persona, he sido creativa y soñadora toda mi vida. Gracias a que vengo de una familia humilde y amorosa, donde me inculcaron buenos principios y valores, sobre todo la etica y lealtad hacia mi y los que confian en mi.</p>
              <div className="container redes">
                <span>
                  <a className="btn-social" href="https://www.linkedin.com/in/maria-helena-santos-pineda-3a952a48/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn-social" href="https://github.com/mhsantosp" target="_blank"><i className="fab fa-github"></i></a>
                  <a className="btn-social" href="https://bio.torre.co/es/msantospineda" target="_blank">
                    <img className="torreCO" src={torreCO} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }
}

export default Home;