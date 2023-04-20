import React, { useState} from 'react';
import "../css/new.css"
import datacenter from "../Services/datacenter.json"
import Toastify from 'toastify-js'

//import { connect } from 'http2';
//import { connect } from 'net';
//import { ScreenContainer } from 'react-native-screens';
//import { setTimeout } from 'timers/promises';
//import WebSocket, { connection } from "websocket";
//import useWebSocket from "react-use-websocket";
//import { connec, messages } from "../services/server"

const  newDevice = () => {
    const jsonfile = require('jsonfile')

    //fix { 

  // eslint-disable-next-line react-hooks/rules-of-hooks
   const [inputname, setInputname] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputport, setInputport] = useState("");

    const changename = (imputname ) => {
        setInputname(imputname.target.value);
    }
  
    const changeport = (imputport ) => {
        setInputport(imputport.target.value);
    }

    // }

function  try_connection(){
    try {

        //url de la connecion 👇 
        var ws = new WebSocket('wss://demo.piesocket.com/v3/channel_55?api_key='+inputport+'&notify_self');
        
        // abriendo la coneccion  😎
        ws.onopen = function () {

            //enviando mensaje 📧  
            ws.send("hola");

            // reciviendo mensaje 📬
            ws.onmessage = function (e) {
                console.log(e);
                ws.close();
                SucessfullyConnect();
                saveitem();
            }
       }     
       ws.onerror = function (e) {
            console.log(e);
            alert("connection error");
       };                   
    }catch (error) {
        console.log(error);
    }
}

    function SucessfullyConnect () { 
        Toastify({
            text: "el dispositivo esta conectado",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
                duration: 3000
        }).showToast();
    }

    function UnsucessfullConnection () { 
        Toastify({
            text: "error en la conexion ",
            style: {
                background: "linear-gradient(to right, #dd1818, #333333)",
            },
                duration: 3000
        }).showToast();
    }

     //salvando los datos 🗃
    function saveitem () {

        var nombre = "asj";
        var port = "asaf";

        var list =  {
            'Datos': [
            ]
        }

        list.Datos.push({
            "name": nombre,
            "puerto": port
        });

        var json = JSON.stringify(list);
        var obj = JSON.parse(json)     
        
        jsonfile.writeFile(datacenter.person, obj, (err) => {
                if (err) { console.error(err); }
            });
    }

    function connect() {
        //console.log('connect is working');
        setTimeout(function () {
            try_connection();
        }, 1000);
    }
        return (
        <div>
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/list">Dispositivos</a>
                </nav>
                <br />
                <br />
                   <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br />
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                        <br />
                    </div>
                </section>
            </header>

            <div className="list roundBorder">
                <h4 className="titulo">Nuevo Dispositivo</h4>
               <br />
                <div className="container-input">
                    <input
                        type="text"
                        className="input"
                        id="client"
                        placeholder="Nombre Usuario"
                        value={inputname}
                        onChange={changename}
                    />*
                    <input
                        type="text"
                        className="input"
                        id="port"
                        placeholder="Puerto"
                        value={inputport}
                        onChange={changeport}
                    />
                </div>
                <br />
                <button className="btn-todo" onClick={connect()} id="agregar" >Agregar</button>
            </div>
            <br />
            <br />
        </div>
    )
}
export default newDevice;

