import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="inicio">
            <div className="container">
                <a className="navbar-brand" href="#">Portafolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav me-0 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#proyectos">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#habilidades">Habilidades</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}
