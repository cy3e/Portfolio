import React from 'react';
import './Navbar.css';

const Navbar = () =>
{
    return (
    <div className='App'>
        <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href='/'><img src="img/logo.png" alt=""/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <a class="navbar-brand" href='/'><img className='logo' src="https://media.discordapp.net/attachments/985659106796929095/1010028767277748234/unknown.png?width=608&height=171" alt=""/></a>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href='/'>Pagina Principal</a></li>
            <li class="nav-item"><a href = 'proyects'>Proyectos</a></li>
            <li class="nav-item"><a href='Services'>Servicios</a></li>
            <li class="nav-item"><a href = 'About'>Sobre Nosotros</a></li>
          </ul>
        </div>
        </nav>
    </div>
    )
}
export default Navbar;