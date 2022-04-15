import React from 'react';
import img1 from '../../images/dinner/dinner1.png';
import img2 from '../../images/breakfast/breakfast2.png';
import img3 from '../../images/lunch/lunch5.png';

const Cart = () => {
    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-12 col-md-8">
                    <img src={img1} width='300px' className='m-3 rounded p-2 shadow' alt="" />
                    <img src={img2} width='300px' className='m-3 rounded p-2 shadow' alt="" />
                    <img src={img3} width='300px' className='m-3 rounded p-2 shadow' alt="" />
                </div>
                <div className="col-12 col-md-4">
                    <h1>Total Cost</h1>
                    <hr />
                    <p>Total price: 150$</p>
                    <p>Total Tax: 20$</p>
                    <h3>Total Cost: 170$</h3>
                    <br />
                    <button className='btn btn-primary w-100 py-3 mb-3'>Order Now</button>
                    <button className='btn btn-danger w-100 py-3'>Delete Orders</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;