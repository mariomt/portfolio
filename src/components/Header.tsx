import React from 'react';

import image from '../assets/images/1638996563173.png';

export const Header = () => {
    return (
        <header className="bg-dark text-white">
            <div className="container-sm">
                <div className="row ">
                    <div className="col-12 col-md-8 d-flex align-items-center mb-3">
                        <div>
                            <p style={{ fontSize: '18px'}}>Hola, mi nombre es</p>
                            <h1>Mario Murillo</h1>
                            <p style={{ fontSize: '18px'}}>Soy Desarrollador Fullstack, especializado en desarrollo backend, realizando aplicaciones escalables en arquitecturas monolíticas y microservicios. Soy una persona proactiva, autodidacta y con habilidad de trabajo colaborativo.</p>
                            <a className="btn btn-primary d-none d-md-inline-block" href="https://drive.google.com/file/d/1l2nC18MuKsKL5Gmz2B9weDNQKG2ysf29/view?usp=sharing" target="_blank">Currículum</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                        <img src={image} alt="" className="img-fluid" style={{ maxWidth: '280px', marginLeft: '-30px'}}/>
                        <a className="btn btn-primary d-md-none" style={{ width: '105%'}} href="https://drive.google.com/file/d/1l2nC18MuKsKL5Gmz2B9weDNQKG2ysf29/view?usp=sharing" target="_blank">Descarga mi Currículum</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
