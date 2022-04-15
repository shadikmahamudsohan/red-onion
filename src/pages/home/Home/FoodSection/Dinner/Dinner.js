import React from 'react';
import { Row } from 'react-bootstrap';
import img1 from '../../../../../images/dinner/dinner1.png';
import img2 from '../../../../../images/dinner/dinner2.png';
import img3 from '../../../../../images/dinner/dinner3.png';
import img4 from '../../../../../images/dinner/dinner4.png';
import img5 from '../../../../../images/dinner/dinner5.png';
import img6 from '../../../../../images/dinner/dinner6.png';
import ShowFood from '../ShowFood/ShowFood';

const Dinner = () => {
    const foods = [
        { id: 1, name: 'food-1', price: '50', description: 'this is a nice food', img: img1 },
        { id: 2, name: 'food-2', price: '50', description: 'this is a nice food', img: img2 },
        { id: 3, name: 'food-3', price: '50', description: 'this is a nice food', img: img3 },
        { id: 4, name: 'food-4', price: '50', description: 'this is a nice food', img: img4 },
        { id: 5, name: 'food-5', price: '50', description: 'this is a nice food', img: img5 },
        { id: 6, name: 'food-6', price: '50', description: 'this is a nice food', img: img6 },
    ];
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-5 container mx-auto">
                {
                    foods.map(food => <ShowFood
                        key={food.id}
                        name={food.name}
                        price={food.price}
                        description={food.description}
                        img={food.img}
                    />)
                }
            </Row>
        </div>
    );
};

export default Dinner;