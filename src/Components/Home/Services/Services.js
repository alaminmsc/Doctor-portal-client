import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
import ServiceCard from '../ServiceCard/ServiceCard';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        text:'Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the',
        photo: fluoride
    },
    {
        name: 'Cavity Filling',
        text:'Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the',
        photo: cavity
    },
    {
        name: 'Teath Whitening',
        text:'Lorem ipsum is simply dummy printing and typesetting indust ipsum has been the',
        photo: teath
    }
]

const Services = () => {
    return (
        <div className="container">
            <div className="my-5 text-center">
                <h2>OUR SERVICES</h2>
                <h1>Services We Provide</h1>
            </div>
            <div className="row justify-content-between">
            {
                serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;