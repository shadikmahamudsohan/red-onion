import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [errorText, setErrorText] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    if (loading) {
        return (
            <div className='my-5 d-block mx-auto'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    const handleSignup = (event) => {
        event.preventDefault();
        setErrorText('');
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    // navigate('/home');
                    toast("Account Created");

                });
        } else {
            setErrorText('wrong confirm password');
        }

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
                <p className='text-danger'>{errorText}</p>
                <p className='text-danger'>{error}</p>
                <Button variant="primary w-100" type="submit">
                    Sign in
                </Button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Signup;