import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import galleryImage1 from '../assets/art-teacher.jpg'; // Replace 'galleryImage1.jpg' with your actual gallery image paths
import galleryImage2 from '../assets/mehendi-bannar.jpg';
import galleryImage3 from '../assets/event.jpg';
import './css/module.AboutUs.css'
import FixedGridLayout from './FixedGridLayout';

const AboutUsPage = () => {
    return (
        <Container className='container_aboutus'>
            {/* Cover Section */}
            <div className="cover-section">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={8} className="text-center">
                        <div className="poster col-10 col-sm-8 col-lg-6 mx-auto">
                                        <img src={`/src/assets/ArtLogo.png`} className="d-block img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                                    </div>
                            <h1>Welcome to The Art Zone</h1>
                            <p className="lead">Where passion meets creativity</p>
                            <Button className="btn btn-primary MjsubscribeBtn" size="lg">Explore More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Introduction Section */}
            <div className="aboutus-section">
                <div className='Container'>
                <Row className="my-5">
                    <Col>
                    <h2 className="pb-2 border-bottom">OUR EVENTS</h2>
                    </Col>
                </Row>

                <FixedGridLayout />
                </div>
            </div>

        </Container>
    );
};

export default AboutUsPage;
