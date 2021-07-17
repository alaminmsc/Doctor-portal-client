import React from 'react';
import Dental from '../Dental/Dental';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Visit from '../Visit/Visit';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Visit></Visit>
           <Services></Services>
           <Dental></Dental>
        </div>
    );
};

export default Home;