import React from 'react';
import headerImg from '../../../images/headerImg.png';

const HeaderMain = () => {
    return (
        <div className="container">
            <div className="row p-2">
                <div className="col-md-5">
                    <h1>Your New Smile <br></br> Starts Here</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <button className="btn btn-primary ">GET APPOINTMENT</button>
                </div>
                <div className="col-md-7 p-1">
                    <img src={headerImg} alt="" width="100%"/>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;