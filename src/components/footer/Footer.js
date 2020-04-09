import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return <footer className="footer">
      <div className="container contenido py-2">
        <div className="row">
          <div className="col-sm-12 col-md-4 offset-md-1 d-none" id="dir">
            <h5 className="text-uppercase font-weight-bold">Dirección</h5>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", border:"1px solid #6351ce"}} />
            <div className="container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7953.423213111747!2d-74.1383961!3d4.645440900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1584576368671!5m2!1ses!2sco" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"/>
          <div className="col-sm-12 col-md-5 mx-auto d-none" id="info">
            <h5 className="text-uppercase font-weight-bold">Acerca de</h5>
            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px", border:"1px solid #6351ce"}} />
            <div className="container redes">
              <ul className="nav justify-content-center social-redes py-1">
                <li className="nav-item">
                  <a target="_blank" href="#" className="nav-link btn-social btn-outline">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a target="_blank" href="#" className="nav-link btn-social btn-outline">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li> */}
                <li className="nav-item">
                  <a target="_blank" href="#" className="nav-link btn-social btn-outline">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a target="_blank" href="#" className="nav-link btn-social btn-outline">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3"/>
            <div className="container form">
              <form className="form-inline my-2">
                <input type="text" className="form-control mr-3" placeholder="Search" aria-label="Search" style={{flex: "1 1 0%"}} />
                <button type="button" className="btn btn-outline-success">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <hr className="clearfix w-100 d-md-none pb-3"/>
              <form className="input-group my-2">
                <input type="text" className="form-control mr-3" placeholder="Your email" aria-label="Your email" aria-describedby="basic-addon2" style={{borderRadius: ".25rem"}} />
                <div className="input-group-append">
                  <button type="button" className="btn btn-outline-info" style={{borderRadius: ".25rem"}} >
                    <span className="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                    <i className="far fa-paper-plane" id="submit"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="container" id="contacto">
              <div className="box-contacto">
                <div className="box-contacto_button">
                  <a className="btn btn-outline-success btn-circle btn-lg" id="whatsapp" href="https://api.whatsapp.com/send?phone=573147683344&text=Hola,%20analicé%20su%20portafolio%20y%20estoy%20interesada(o)%20en%20cotizar%20un%20proyecto.%20Espero%20su%20respuesta,%20gracias." role="button" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-circle btn-lg" id="facebook" href="https://m.me/msantospineda" role="button" target="_blank">
                    <i className="fab fa-facebook-messenger"></i>
                  </a>
                  <a className="btn btn-outline-info btn-circle btn-lg" id="e-mail" href="mailto:msantospineda1@gmail.com?Subject=Hola,%20analicé%20su%20portafolio%20y%20estoy%20interesada(o)%20en%20cotizar%20un%20proyecto.%20Espero%20su%20respuesta,%20gracias." role="button" target="_blank">
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
                <div className="box-contacto_menssage"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright py-3">
        <p className="text-center">© Copyright 2020 - Dai Clover</p>
      </div>
    </footer>
  }
}

export default Footer;