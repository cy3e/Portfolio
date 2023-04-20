import "../css/list.css"
import datacenter from "../Services/datacenter.json"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DeviceList() {
    const [list, setlist] = useState(0)


    useEffect(() => {
        //importing the table variable 
        var tabla = document.getElementById('tabla')

        // creating variables
        var identification;
        var array = [50];
        var ar = [localStorage.getItem('ports')];
        var list = array.length

        for (var i = 0; i < datacenter.person.length; i++) {
            array[i] = datacenter.person.name;
            console.log(datacenter.person.name);
        }


        // creating the loop for fill_table
        //array.forEach(fill_table)
        //function fill_table() {
        for (var i = 0; i < array.length; i++) {

            //variable

            //creating Html Elemnts
            var el = document.createElement('tr');
            var cliente = document.createElement('td');
            var accion = document.createElement('td');
            var btn = document.createElement('Button');

            //tr style
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
            el.style.fontSize = '18px'
            el.style.borderBottom = '1px solid #bbb';
            el.style.width = '100%';
            el.style.height = '5vmin';
            el.style.borderRadius = '20px';

            //td style
            cliente.style.textAlign = 'center';

            //btn style
            btn.style.backgroundColor = 'aliceblue';
            btn.style.width = '100%';
            btn.style.height = '100%';

            //test
            console.log(list);

            // adding to clientes
            cliente.innerHTML = '' + array[i];

            //adding id to button
            var data = ar[i]?.toString()
            btn.id = array[i]
            btn.innerHTML = 'Administrar'

            //setting button function
            btn.onclick = verify_then_redirect

            //append 
            accion.appendChild(btn)
            el?.appendChild(cliente)
            el?.appendChild(accion)
            tabla?.appendChild(el);
        }

        // this function is the brigge to chech the avabiality of the device and nav to the tool page

        function verify_then_redirect () {

            // make the action to get the cliente data and send it to  tools         
            // este funcion se encarga de que se haga una verificacion 
            // antes de redirigir a la pagina tools,
            // primero verifica si el telefono esta dispuesto a conectarse
            // y luego al recibir el mensaje este redirecciona a la pagina
            //de herramientas para que se pueda ejecutar la accion deseada
            test_and_send(btn.id);

           }
    })

    // nav to the tool page
    let navigate = useNavigate();
    const handleBack = () => {
        navigate('/tools');
    };

    function test_and_send(String nombre){
        var cliente;
        var puert;
        for (var i = 0; i < datacenter.person.length; i++) {
            cliente = datacenter.person.name[i]
            if (cliente == nombre){
                puert = datacenter.person.port[i]
                return puert
            }
        }

        if (puert =! null){
            try {
                   var ws = new WebSocket('wss://10.0.0.154');
                   ws.onopen = function () {
                    ws.send("hola");
                    ws.onmessage = function (e) {
                        console.log(e);
                        //alert("connection establecida");
                        ws.close();
                        //saveitem();
                        navigate('tools'+ puert);
                        console.log(btn.id);

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

    }

    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/new">Nuevo Dispositivo</a>
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




