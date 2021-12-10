import React from 'react';

interface Props {
    title: string;
    description: string;
    content?: string | JSX.Element;
    img: string;
    onClick?: (title: string, description: string, img:string, content?:string | JSX.Element) => void
}

export const ProjectCard = ({title, description, img, content, onClick}: Props) => {
    return (
        <div className="card shadow-sm project-card" style={{ marginBottom: '15px'}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    onClick={ () => onClick? onClick(title, description, img, content):null }
                >
                    Ver más
                </button>
            </div>
        </div>
    )
}
