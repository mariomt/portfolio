import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faCss3Alt, faHtml5, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { Footer } from '../components/Footer';
import { JobCard } from '../components/JobCard';
import { Modal } from '../components/Modal';

import { data } from './HomePageData';
import { FloatButton } from '../components/FloatButton';

export const HomePage = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [modalInfo, setModalInfo ] = useState<{ title: string; content: string | JSX.Element; image: string}>({
        title: "Proyecto",
        content: "...",
        image: "...",
    });

    const modalInfoFunction = (title: string, description: string, img: string, content?: string | JSX.Element | undefined) => {
        setModalInfo({
            title,
            content: content? content:'',
            image: img,
        });        
    };

    return (
        <>
            <Navbar />
            <Header />

            {
                scrollPosition > 40 && <FloatButton />
            }

            <div className="container mt-5" id="proyectos">
                <div className="title-line">
                    <h3 className="text-start m-1">Proyectos</h3>
                </div>

                <div className="pt-5 d-flex justify-content-around flex-wrap ">
                    {
                        data.map((e) => (
                            <ProjectCard
                                {...e}
                                onClick={modalInfoFunction}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="container mt-5" id="habilidades">
                <div className="title-line">
                    <h3 className="text-start m-1">Habilidades</h3>
                </div>

                <div className="mt-5">
                    <FontAwesomeIcon icon={ faJs }  style={{ fontSize: "6em", color: '#f8e017', margin: '10px'}}/>
                    <FontAwesomeIcon icon={ faCss3Alt }  style={{ fontSize: "6em", color: '#27a3d9', margin: '10px'}}/>
                    <FontAwesomeIcon icon={ faHtml5 }  style={{ fontSize: "6em", color: '#ea6227', margin: '10px'}}/>
                    <FontAwesomeIcon icon={ faReact }  style={{ fontSize: "6em", color: '#5ed4f3', margin: '10px'}}/>
                    <FontAwesomeIcon icon={ faNodeJs }  style={{ fontSize: "6em", color: '#509941', margin: '10px'}}/>
                    <img alt="c sharp" style={{ width: '80px', verticalAlign: 'super'}} src="https://iconape.com/wp-content/files/sh/51404/svg/c--4.svg"/>
                </div>
            </div>

            <div className="container mt-5" id="experiencia">
                <div className="title-line">
                    <h3 className="text-start m-1">Experiencia</h3>
                </div>

                <div className="mt-5 d-flex flex-column align-items-center">
                    <JobCard
                        image="https://www.mexicoescultura.com/galerias/espacios/principal/creson.jpg"
                        title="CRESON"
                        description="Analista Técnico"
                        dateStart="Ago 2020"
                        dateEnd="actualmente"
                    />
                    <JobCard
                        image="https://mir-s3-cdn-cf.behance.net/projects/404/baac8e69885585.Y3JvcCw0MDQsMzE2LDUxOCwyOTI.png"
                        title="CAFFENIO"
                        description="Técnico de proyecto"
                        dateStart="Jul 2019"
                        dateEnd="Dic 2019"
                    />
                </div>
            </div>

            <Footer id="contacto"/>
            <Modal {...modalInfo}/>
        </>
    )
}
