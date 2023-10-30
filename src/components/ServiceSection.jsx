import React from 'react';
import './ServiceSection.css'
import { Card } from 'react-bootstrap';
function ServiceSection() {
    return (
        <div className='serviceContainer'>
            <div className='serviceTitle d-flex align-items-center justify-content-center' style={{marginBottom:'50px'}}>
                My Service
            </div>
            <div className='row'>

                <div className='col-md-6 mb-4'>
                    <Card className='p-3 shadow service-card' style={{   borderColor: 'white'}}>
                        <div className='d-flex'>
                            <div className='ms-2' style={{ marginTop: '30px' }}>
                                <i class="fa-solid fa-pen-nib fa-xl" style={{ color: '#245235' }}></i>
                            </div>
                            <div>
                                <Card.Body className='content-style'>
                                    <Card.Title>UI/UX Designer</Card.Title>
                                    Passionate UI/UX Designer transforming ideas into captivating digital experiences. Expert in blending aesthetics with functionality for seamless user journeys.
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-md-6 mb-4'>
                    <Card className='p-3 shadow service-card' style={{   borderColor: 'white'}}>
                        <div className='d-flex'>
                            <div className='ms-2' style={{ marginTop: '30px' }}>
                                <i class="fa-solid fa-code fa-xl" style={{ color: '#245235' }}></i>
                            </div>
                            <div>
                                <Card.Body className='content-style'>
                                    <Card.Title>Front-end Development</Card.Title>
                                    Frontend Developer proficient in Angular and React, sculpting user-centric interfaces with a touch of innovation. Turning design concepts into responsive and dynamic web applications.
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>


                <div className='col-md-6 mb-4'>
                    <Card className='p-3 shadow service-card' style={{   borderColor: 'white'}}>
                        <div className='d-flex'>
                            <div className='ms-2' style={{ marginTop: '30px' }}>
                                <i class="fa-solid fa-window-restore fa-xl" style={{ color: '#245235' }}></i>
                            </div>
                            <div>
                                <Card.Body className='content-style'>
                                    <Card.Title>Back-end Development</Card.Title>
                                    Backend Developer specializing in .NET Core, architecting robust and scalable solutions. Transforming complex ideas into efficient code for seamless system functionality.
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='col-md-6 mb-4'>
                    <Card className='p-3 shadow service-card' style={{   borderColor: 'white'}}>
                        <div className='d-flex'>
                            <div className='ms-2' style={{ marginTop: '30px' }}>
                                <i class="fa-solid fa-database fa-xl" style={{ color: '#245235' }}></i>
                            </div>
                            <div>
                                <Card.Body className='content-style'>
                                    <Card.Title>Data mining</Card.Title>
                                    Championed data preparation initiatives for Retail Banking and Credit Unions, specializing in Altair Monarch Altair Monarch Server and Altair Monarch Data Prep Studio
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default ServiceSection