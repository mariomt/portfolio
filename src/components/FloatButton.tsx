import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
    id?: string;
}

export const FloatButton = ({id}: Props) => {
    return (
        <div className="floating-button-container ">
            <a id={id} href="#inicio" className="btn btn-primary rounded-circle position-absolute floating-button shadow-sm" style={{ width: '40px', height: '40px'}}>
                <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '15px' }} />
            </a>
        </div>
    )
}
