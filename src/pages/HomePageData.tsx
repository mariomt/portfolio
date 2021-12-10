import React from 'react';

import sistema_llaves from '../assets/images/sistema_llaves.png';
import data_ceson from '../assets/images/DataHomeScreen.png';
import tv_creson from '../assets/images/TvCreson.png';

interface Data {
    title: string;
    description: string;
    img: string;
    content: string | JSX.Element;
}

const SIE = () => {
    return (
        <>
            <p className="text-start"><br />Este proyecto consta de varios módulos destinados a la aplicación evaluaciones, realizadas internamente en la institución.</p>
            <p className="text-start">El proyecto está realizado con las tecnologías ReactJs, NodeJs y Mysql. Internamente el software está contectado a otros sistemas, los cuales proveen información para una mejor experiencia de uso.</p>
            <p className="text-start">Una de las evaluaciones implementadas, es la evaluación de respuestas múltiples, en la cual, se puede evaluar el conocimiento de los usuarios que aplican alguno de los cuestionarios registrados.</p>
            <img src="http://data.creson.edu.mx/static/media/home/q&a.png" alt="cuestionario de evaluación" className="img-fluid" /><br /><br />
            <p className="text-start text-muted">En la elaboración de este proyecto participaron: <ul>
                <li className="text-start">Ing. Daniel Encinas - Coordinador del proyecto</li>
                <li className="text-start">Lic. Manuel Ramírez - Analista de datos</li>
                <li className="text-start">Ing. Mario Murillo - Desarrollador de software</li>
            </ul></p>
        </>
    )
}

const TVCRESON = () => {
    return (
        <>
            <p className="text-start"><br />A este proyecto se adicionaron características de seguridad y se repararon fragmentos de código que hacían que el sistema dejara de estar disponible. El proyecto se encuentra desarrollado en el lenguaje de programación PHP, por lo cual las nuevas características se encuentran en el mismo lenguaje.</p>
            <p className="text-start">El sistema es un repositorios de videos educativos, realizados por la misma intitución, los cuales van dirigidos a los docentes y futuros docentes de las unidades académicas adscritas a CRESON.</p>
        </>
    )
}

const LLAVESUNISON = () => {
    return (
        <>
            <p className="text-start"><br />Este proyecto fue desarrollado para el departamento de ingeniería industrial de la Universidad de Sonora, con el proposito de solventar el problema de asignació de llaves de las aulas de clases y el préstamo de objetos.</p>
            <p className="text-start">El sistema se encuentra desarrollado en el lenguaje de programación PHP, más específicamente, con el framework Laravel. Para el almacenamiento de los datos se utilizó el SGBD MySQL. Por último, para manejar la sección principal del sistema como SPA, se utilizó el framework VueJs.</p>
            <p className="text-start text-muted">En la elaboración de este proyecto participaron: <ul>
                <li className="text-start">Ing. Jesús Ramírez - Diseñador UI/UX</li>
                <li className="text-start">Ing. José González - Desarrollador de software</li>
                <li className="text-start">Ing. Mario Murillo - Diseño de arquitectura y desarrollador.</li>
            </ul></p>
        </>
    )
}

const CAFFENIO = () => {
    return (
        <>
            <p className="text-start"><br />Este proyecto, consistió en añadir nuevas características al sistema de punto de ventas del corporativo CAFFENIO. Dichas adiciones, se realizaron en la aplicación de escritorio, la aplicación de tableta, y el API de la app móvil.</p>
            <p className="text-start">Para poder realizar estas características, se utilizó el lenguaje de programación C#, Entity Framework, el Micro ORM Dapper, entre otras tecnologías. Tambien, tuvieron que agregarse nuevas características a otra aplicación interna la cual se encuentra desarrollada en Angular 4. Esto, con la finalidad de aprobechar al máximo las otras adiciones al punto de ventas.</p>
            <p className="text-start">Por último, para complementar los sistemas modificados, se hicieron adecuaciones a la base de datos, la cual se encuentra en el SGBD SqlServer</p>
        </>
    )
}

export const data: Array<Data> = [
    {
        title: "Sistema Integral de Evaluación",
        description: "Proyecto realizado con el stack Mysql, Express, ReactJs, NodeJs",
        img: data_ceson,
        content: <SIE />
    }, {
        title: "Tv Cresons",
        description: "Proyecto al que se le dio mantenimiento. Este proyecto está realizado en PHP",
        img: tv_creson,
        content: <TVCRESON />
    }, {
        title: "Sistema de llaves - UNISON",
        description: "Proyecto realizado con las tecnologías PHP y Mysql con el Framework Laravel",
        img: sistema_llaves,
        content:<LLAVESUNISON/>
    }, {
        title: "Reglas de negocio: programa lealtad",
        description: "En este proyecto se utilizaron las tecnologías: C#, Entity Framework y JavaScript",
        img: "https://cdn.shopify.com/s/files/1/1285/3371/files/Logo.png?height=628&pad_color=fff&v=1560806922&width=1200",
        content: <CAFFENIO />
    }
];
