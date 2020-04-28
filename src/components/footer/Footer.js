import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return <footer className="footer">
      <div className="container-fluid contenido py-2">
        <div className="row">
          <div className="col-12">
            <div className="container" id="contacto">
              <div className="box-contacto">
                <div className="box-contacto_button">
                  <a className="btn btn-outline-success btn-circle btn-lg" id="whatsapp" href="https://api.whatsapp.com/send?phone=573147683344&text=Hola,%20analicé%20su%20portafolio%20y%20estoy%20interesada(o)%20en%20cotizar%20un%20proyecto.%20Espero%20su%20respuesta,%20gracias." role="button" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a className="btn btn-outline-primary btn-circle btn-lg" id="facebook" href="https://m.me/msantospineda" role="button" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-facebook-messenger"></i>
                  </a>
                  <a className="btn btn-outline-info btn-circle btn-lg" id="e-mail" href="mailto:msantospineda1@gmail.com?Subject=Hola,%20analicé%20su%20portafolio%20y%20estoy%20interesada(o)%20en%20cotizar%20un%20proyecto.%20Espero%20su%20respuesta,%20gracias." role="button" target="_blank" rel="noopener noreferrer" >
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright py-3">
        <h6 className="text-center m-0">© Copyright 2020 - Dai Clover - 
          {/* <a href="/#facebook" target="_blank" rel="nofollow noopener">
            <i class="fab fa-whatsapp"></i>
          </a> */}
        </h6>
      </div>
    </footer>
  }
}

export default Footer;