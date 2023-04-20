//imports the react resources
import React from "react";
import {Carrousel}  from '../../Components/Carrousel/Carrousel';

//css
import './home.css';

const Home  = () =>
{
    return(
            <div className="App">
            <Carrousel/>
              <body>
                  <div class="container mt-5 mb-5">
                      <div class="row align-items-center bg-dark">
                          <div class="col-sm-6">
                              <h1 class="text-center text-warning display-5 pt-5">BIENVENIDOS</h1>
                              <p class="text-white text-justify pt-3 p-5">Somos el tipo de empresa operadora de servicios en donde ofrecemos distintos apartados concernientes a la construcción, de igual forma ofreciendo al cliente una experiencia diferente, con un nivel de confianza excepcional, prometiendo edificaciones y distintos servicios a la par de sus necesidades. Los clientes serán personas físicas o jurídicas que requieran de nuestros servicios a la hora de realizar cualquier tipo de construcción.</p>
                              <p class="text-white text-justify pt-0  p-5">El mundo cambió y con ello el diseño y la construcción, es tiempo de cambios de adaptarnos a las nuevas tendencias en texturas, colores, espacios y un mundo de opciones a la hora de construir.  La empresa venderá nuestros servicios para cualquier trabajo de construcción requerido y también venderemos productos de construcción al por mayor para clientes que necesiten los utensilios necesarios. </p>
                          </div>
                          <div class="col-sm-6">
                              <div class="row">
                                  <div class="col-12 pt-7 pb-5 bg-warning">
                                    <h2 class="h1 pt-5">CONSTRUCCIÓN</h2>
                                      <p class="text-white text-justify pt-4 p-5">El negocio atenderá los requerimientos de construcción del cliente para ellos, si hay necesidad de construir torres con diferentes departamentos, se hacen convenios para que nuestra empresa constructora pueda empezar a trabajar, oficinas o alguna de las obras que quiera hacer en su casa, nosotros nos encargaremos.</p>

                                  </div>
                              </div>
                                    <div class="col-12 pt-5  align-items-center pb-5 bg-gray text-white">
                                      <h2 class="h2 pt-2 p-4">SERVICIOS</h2>
                                        <ul className="services row">
                                            <li>Plomería</li>
                                            <li>Electricidad</li>
                                            <li>Carpintería</li>
                                            <li>Vaciado con wincher</li>
                                            <li>Vaciado con tractor</li>
                                            <li>Vaciado con bote</li>
                                            <li>Diseño arquitectónico</li>
                                            <li>Administración de condominios</li>
                                        </ul>
                                  </div>
                          </div>
                      </div>
                  </div>
              </body>
          </div>
    )
}
export default Home;