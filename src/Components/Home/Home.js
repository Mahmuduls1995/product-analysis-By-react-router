import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Reviews from '../Reviews/Reviews';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Row className='d-flex align-items-center container mx-auto'>
                <Col md={6} sm={12}>

                    <h1 className='fw-bold flex  display-4'>Your Next Laptop</h1>
                    <p className="text-justify my-4">
                        Performance and battery life was great, no fan noise, and it ran almost every app I needed. But the MacBook Air does all that and more, in a lighter and less costly package. Better performance. Two times the memory and 4x the storage.
                    </p>

                    <div className="flex">
                        <button className='btn btn-primary text-white '>Live Demo</button>

                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <img className='img-fluid' width="600px" src="https://png.pngitem.com/pimgs/s/617-6173738_apple-macbook-air-13-128gb-silver-mvfk2t-hd.png" alt="" />
                </Col>
            </Row>
            <Reviews></Reviews>
        </div>


    );
};

export default Home;