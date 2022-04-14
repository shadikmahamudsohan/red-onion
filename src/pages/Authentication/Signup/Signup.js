import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../images/logo2.png';

const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const handleSignup = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log(name, email, password, confirmPassword);

    };
    return (
        <div className='mx-auto mt-3' style={{ maxWidth: '400px' }}>
            <img className='w-75 mb-5 mx-auto d-block' src={logo} alt="" />
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3 mt-5" controlId="name">
                    <Form.Control required ref={nameRef} className='py-3' type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control required ref={emailRef} className='py-3' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Control required ref={passwordRef} className='py-3' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control required ref={confirmPasswordRef} className='py-3' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Sign in
                </Button>
            </Form>
        </div>
    );
};

export default Signup;