import React from 'react';

const ServiceCard = (props) => {
    const {name, text, photo} = props.service;

    return (
        <div className="col-md-4 p-4">
            <div className="text-center">
                <img src={photo} alt="" style={{width:'100px',height:'100px'}}></img>
            </div> 
                <h4 className="my-3 text-center">{name}</h4>
                <p>{text}</p>
            </div>
    );
};

export default ServiceCard;