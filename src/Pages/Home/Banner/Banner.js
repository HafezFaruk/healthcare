import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3>Research Center</h3>
                        <p>Here the doctors advise the patients about the development of the service so that the patient can be cured quickly with the service</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Admission Patient Space Center</h3>
                        <p>Here patients receive developmental services after admission. Our various doctors provide round-the-clock services to find out their punishment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Vaccination centers on different floors</h3>
                        <p>Here is the vaccine of contemporary consumption through development research</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;