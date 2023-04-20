//imports the react resources
import React from "react";
import { Card } from "react-bootstrap";
import {Carrousel}  from '../../Components/Carrousel/Carrousel';



//css
import './Proyects.css';


const proyects =  () =>
{
    return (  
      <div className="App" onLoad={console.log('funcionando')}>
          <Carrousel/>
          <br/>
          <br/>
          <div className="container">
            <div className="row mt-4">
                <t1>Nuestros Proyectos</t1>
                <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                      <div className="card shadow">
                        <img src="https://media.discordapp.net/attachments/985659106796929095/1007785073594081310/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool1"/>
                        <div className="card-body">
                          <h4>Construcción</h4><hr/>
                          <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                        </div>
                      </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                    <div className="card shadow">
                      <img src="https://media.discordapp.net/attachments/985659106796929095/1007785122151546880/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool2"/>
                      <div className="card-body">
                        <h4>Reconstrucción</h4><hr/>
                        <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                      </div>
                    </div>
                </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                    <div className="card shadow">
                      <img src="https://media.discordapp.net/attachments/985659106796929095/1007784708739969064/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool3"/>
                      <div className="card-body">
                        <h4>Arquitectura</h4><hr/>
                        <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                    <div className="card shadow">
                      <img src="https://media.discordapp.net/attachments/985659106796929095/1007784575335944293/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool4"/>
                      <div className="card-body">
                        <h4>Remodelación</h4><hr/>
                        <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                      </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                    <div className="card shadow">
                      <img src="https://media.discordapp.net/attachments/985659106796929095/1007784514459815996/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool5"/>
                      <div className="card-body">
                        <h4>Pinturas</h4><hr/>
                        <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                      </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 py-3">
                      <div className="card shadow">
                        <img src="https://media.discordapp.net/attachments/985659106796929095/1007784843234512936/unknown.png?width=711&height=702" class="card-img-top" alt="CasaCool6"/>
                        <div className="card-body">
                          <h4>Vaciado de Zapata</h4><hr/>
                          <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                          <a href="#" className="btn btn-sm btn-primary">Más Información</a>
                        </div>
                      </div>
                </div>
            </div>
          </div>
    </div>    
    )
  }
export default proyects;