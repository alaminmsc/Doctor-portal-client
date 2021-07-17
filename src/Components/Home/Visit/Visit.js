import { faClock, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Visit = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-3 d-flex align-items-center p-4" style={{background:'green'}}>
                            <FontAwesomeIcon icon={faClock} style={{width:'60px',height:'60px',color:'red'}}></FontAwesomeIcon>
                        <div className="ms-3">
                            <h4>Opening Hours</h4>
                            <p>Lorem ipsum is simply dummy text of the part</p>
                        </div>
                </div>
                <div className="col-md-3 d-flex align-items-center p-4 mx-3" style={{background:'green'}}>
                            <FontAwesomeIcon icon={faClock} style={{width:'60px',height:'60px',color:'red'}}></FontAwesomeIcon>
                        <div className="ms-3">
                            <h4>Opening Hours</h4>
                            <p>Lorem ipsum is simply dummy text of the part</p>
                        </div>
                </div>
                <div className="col-md-3 d-flex align-items-center p-4" style={{background:'green'}}>
                            <FontAwesomeIcon icon={faClock} style={{width:'60px',height:'60px',color:'red'}}></FontAwesomeIcon>
                        <div className="ms-3">
                            <h4>Opening Hours</h4>
                            <p>Lorem ipsum is simply dummy text of the part</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Visit;