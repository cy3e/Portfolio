import React from "react";
import "../css/tools.css";
//import { conectdevice, connec, closeconnection, blockdevice, } from "../services/server";


const tools = () => {
    var port = "0026";
     function onblock(){
        try {
            var ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self:' + port );
            ws.onopen = function() {
                console.log('ws block');
                ws.send("block");
            }
        } catch (error) {
            console.log(error);
        }
     }

    function onunlock(){
        try {
            var ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self:' + port);
            ws.onopen = function() {
                console.log('ws unlock');
                ws.send("unlock");
            }
        } catch (error) {
            console.log(error);
        }
     }
     function deleteevicence(){
        //delete the app and conection
        try {
            var ws = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self:' + port);
            ws.onopen = function() {
                console.log('ws del');
                ws.send("delete");
            }
        } catch (error) {
            console.log(error);
        }
     }
    
    console.log("Tools");
    return (
        <div>
            <header>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/list">Dispositivo</a>
                    <a href="/new">Nuevo Disposivo</a>
                </nav>
                <br />
                    <section className= "textosheader">
                        <div className="textosheader">
                            <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                            <br/>
                            <br/>
                        </div>
                    </section>
            </header>

            <div className="tool-container">
                <div className="tool-card">
                    <div className="left-column background1-left-column">
                        <h6>AndroidBlock📵</h6>
                        <h3>Herramientas</h3>
                    </div>  
                    <div className="right-column">
                        <div>
                        <button className="button background1-left-column" onClick={onblock()}>Bloquear<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                            </svg></button>
                            <p>Esta opcion bloquea el dispositivo.</p>
                        </div>
                        <div>
                        <button className="button1 background1-left-column" onClick={onunlock()}>Desbloquear<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock-fill" viewBox="0 0 16 16">
                        <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"/>
                        </svg></button>
                        <p>Esta opcion desbloquea el dispositivo.</p>
                        </div>
                        <div>
                        <button className="button2 background1-left-column"onClick={deleteevicence()}>Delete<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg></button>
                        <p>Esta opcion borra la aplicacion del dispositivo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default tools;