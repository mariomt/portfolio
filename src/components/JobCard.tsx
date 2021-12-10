import React from 'react';

interface Props {
    title: string;
    description: string;
    dateStart: string;
    dateEnd: string;
    image: string;
}

export const JobCard = ({ title, description, dateStart, dateEnd, image }:Props) => {
    return (
        <div className="card mb-3 shadow-sm" style={{ maxWidth: '540px'}}>
            <div className="row g-0">
            <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{dateStart} - {dateEnd}</small></p>
                </div>
            </div>
            </div>
        </div>
    )
}
