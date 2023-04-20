//imports the react resources
import React,{Suspense,useState,useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import Casa from "../../Components/casa/Casa";
import {  OrbitControls } from '@react-three/drei';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';

import './Services.css';


var x,y,z;

  x = 45;
  y=60;
  z=115;


function  Services() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // mailjs  a mail api 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1dcyvm6', 'template_52n5k4k', form.current, 'g-asMrM53TAD69D-xVzk2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



var x,y,z;
x = 75;
y=20; 
z=15

  return (
    <>
    <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href='/'><img src="img/logo.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"className='nav' id="navbarNav">
          <ul class="navbar-nav ml-auto" className='item'>
            <a onClick={handleShow}><img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011104472468037733/ebanista.png' alt=''/></a>
            <li><a></a></li>
            <a onClick={handleShow}><img className='items'src='https://cdn.discordapp.com/attachments/985659106796929095/1011103983277973545/construccion.png' alt/></a>
            <li><a></a></li>
            <a onClick={handleShow}><img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011103532453200003/electricidad.png' alt/></a>
            <li><a></a></li>
            <a onClick={handleShow}><img className='items' src='https://cdn.discordapp.com/attachments/985659106796929095/1011103119704330273/plomeria.png' alt/></a>
            <li><a></a></li>
            <a onClick={handleShow}><img className='items'src="https://cdn.discordapp.com/attachments/985659106796929095/1011102755651342366/plano.png" alt="" /></a>
            <li><a></a></li>
          </ul>
        </div>
    </nav>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> preguntenos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          para obtener informacion acerca de alguno de nuestros servicios por favor diganos su duda y nosotros le responderemos con la mayor brevedad posible 
          <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cerrar
          </Button>
          <Button id='btn1' variant="primary"  onClick={handleClose}>enviar</Button>
        </Modal.Footer>
    </Modal>


        

    <div className='d3'>
    <Canvas camera={{zoom: 1, position:[x,y,z]}}>
      <ambientLight intensity={0.5}/>
      <pointLight position={[35,35,0]} intensity={0.4}/>
      <pointLight position={[-35,35,0]} intensity={0.4}/>
        <Casa/>
      <OrbitControls/>
    </Canvas>
    </div>
  </>
  );
};
export default Services;