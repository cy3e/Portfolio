import React from "react"
import "../css/list.css" 
function DeviceList(){
return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/Newdevice">Nuevo Dispositivo</a>
                    {/*<a href="/tools">Herramientas</a>*/}
                </nav>
                <br />
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>AndroidBlock📵</h1>
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                    </div>
                    <br />
                </section>
            </header>

            <div className="list-container">
                <div className="device-form">
                    <div className="card-device">
                        <h1 className="card-list text-center">Dispositivos</h1>
                        <br />
                        <div id='listcontainer'>
                            <table id="tabla">
                                <tr >
                                    <th>cliente</th>
                                    <th>accion</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </div>
    )
}
export default DeviceList;