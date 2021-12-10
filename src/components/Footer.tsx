import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

interface Props {
    id?: string
}

export const Footer = ({ id }:Props) => {
    return (
        <div className="bg-dark text-white mt-5" style={{ height: '100px'}} id={id}>
            <div className="container d-block d-sm-flex justify-content-between align-items-center" style={{ minHeight: '100%'}}>
                <div className="pt-4 pt-sm-0">
                    <a href="https://www.facebook.com/marioo00/" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', color: 'white', marginRight: '10px'}}/></a>
                    <a href="https://twitter.com/mgilberto704" target="_blank"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '30px', color: 'white', marginRight: '10px'}}/></a>
                    <a href="https://github.com/mariomt" target="_blank"><FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px', color: 'white'}}/></a>
                </div>
                <div>
                    <a href="mailto:mariotinoco85@gmail.com" style={{ color: 'white'}}><FontAwesomeIcon icon={faMailBulk} style={{ fontSize: '16px', color: 'white', marginRight:'10px'}}/> mariotinoco85@gmail.com</a>
                </div>
            </div>
        </div>
    )
}
