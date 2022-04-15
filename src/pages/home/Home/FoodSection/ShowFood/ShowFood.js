import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ShowFood = ({ img, name, description, price }) => {
    return (
        <Col>
            <Card className='pt-3 text-center shadow'>
                <Card.Img variant="top px-3" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                        <br />
                    </Card.Text>
                    <Card.Title>${price}</Card.Title>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ShowFood;;