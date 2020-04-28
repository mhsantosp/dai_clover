import React, { Component } from 'react';
import './Home.scss';
import logotipo from '../../../images/logos/daiclover3.png';
import torreCO from '../../../images/logos/Torre-icon.png';
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return <section className="Inicio" id="home">
      <div className="container contentgral">
        <h1 className="d-none"> Dai Clover - Maria Helena Santos Pineda - Portafolio</h1>
        <div className="row justify-content-around">
          <div className="col-12 col-sm-12 col-md-5 d-flex align-items-center">
            <div className="container py-3 perfil">
              <img src={logotipo} alt="Logo" id="logo_marcaPnal" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-7 d-flex align-items-around">
            <div className="container my-auto perfil">
              <div className="photo"></div>
              <p>¡Hola! Soy <strong>Maria Helena</strong> <b>Desarrolladora Front End</b>. <br /> Me apasiona la Maquetación, el Diseño, el Desarrollo y Administración de páginas web. <br/> Como persona, he sido <b>creativa y soñadora</b> toda mi vida. Gracias a que vengo de una familia humilde y amorosa, donde me inculcaron buenos <b>principios, valores y respeto,</b> sobre todo la <b>ética y lealtad</b> hacia mí y los que deciden brindarme su confianza.</p>
              <p>Te invito a ver mi <NavLink to="/dai_clover/Portafolio" className="nav-link">portafolio</NavLink>, donde podrás observar y visitar algunos proyectos en los que he participado.</p>
              <div className="container redes">
                <span>
                  <a className="btn-social" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maria-helena-santos-pineda-3a952a48/"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn-social" href="https://github.com/mhsantosp" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                  <a className="btn-social" href="https://bio.torre.co/es/msantospineda" target="_blank" rel="noopener noreferrer" >
                    <img className="torreCO" src={torreCO} alt="torre.co" />
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