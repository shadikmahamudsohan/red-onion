import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../../images/adult-blur-blurred-background-687824.png';
import img2 from '../../../../images/chef-cook-food-33614.png';
import img3 from '../../../../images/architecture-building-city-2047397.png';

const WhyChooseUs = () => {
    return (
        <section className='my-5 container'>
            <h1>Why you choose us</h1>
            <div className='w-50'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident tempore aspernatur consequuntur culpa ipsam illo et, veniam fugiat officia a sit, est dolorum ab voluptatem. Facere quia est provident.</p>
            </div>
            <div>
                <Row xs={1} md={2} lg={3} className="g-4 my-3">
                    <Col>
                        <Card className='shadow'>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Fast Delevery</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>
                                    <button className='btn btn-lik text-decoration-none text-primary'>See more</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow'>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>A Good Auto Responder</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>
                                    <button className='btn btn-lik text-decoration-none text-primary'>See more</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='shadow'>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Home Delivery</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>
                                    <button className='btn btn-lik text-decoration-none text-primary'>See more</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    );
};
export default WhyChooseUs;