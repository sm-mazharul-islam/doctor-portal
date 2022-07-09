import React from 'react';
import Services from '../../../Services/Services';
import DentalCare from '../../DentalCare/DentalCare/DentalCare';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services> </Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>

        </div>
    );
};

export default Home;