/* eslint-disable react-hooks/rules-of-hooks */
import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/home.css"
import App from "../App";

const home = () =>{
  const Navigate = useNavigate();
  const [inputusr, setInputusr] = useState("");
  const [inputpass, setInputpass] = useState("");
  
  const changeusr = (imputusr ) => {
    setInputusr(imputusr.target.value);
  }
  
  const changepass = (imputpass ) => {
    setInputpass(imputpass.target.value);
  }

  var user , password;

    function auth ()  {
        if (inputusr == "Admin" && inputpass == "Admin"){
            Navigate("list");
            console.log("Auth working")
        }
    };

    return (
        <div>
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <br />
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                        <br />
                    </div>
                </section>
            </header>

            <section className="form-main">
                <div className="form-content">
                    <div className="box">
                        <h3>Inicio AndroidBlock</h3>
                        <form >
                            <div className="input-box">
                                <input
                                    id="User"
                                    type="text"
                                    placeholder="Usuario"
                                    className="input-control"
                                    value={inputusr} 
                                    onChange={changeusr}
                                    />
                            </div>
                            <div className="input-box">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    className="input-control"
                                    value={inputpass} 
                                    onChange={changepass}
                                />
                            </div>
                            <br />
                            <br />
                            <button id="submit" onClick={auth()} className="btn">Acceder</button>
                        </form>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}
export default home;