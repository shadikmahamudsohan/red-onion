import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [errorText, setErrorText] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading) {
        return (
            <div className='my-5'>
                <Spinner animation="border" className='d-block mx-auto' role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
    const handleSignup = (event) => {
        event.preventDefault();
        setErrorText('');
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    if (user) {
        toast("Logged In");
        navigate(from, { replace: true });
    }
    return (
        <div className='mx-auto mt-3' style={{ maxWidth: '400px' }}>
            <img className='w-75 mb-5 mx-auto d-block' src={logo} alt="" />
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Control required ref={emailRef} className='py-3' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                    <Form.Control required ref={passwordRef} className='py-3' type="password" placeholder="Password" />
                </Form.Group>
                <p className='text-danger'>{errorText}</p>
                <p className='text-danger'>{error}</p>
                <Button variant="primary w-100" type="submit">
                    Sign in
                </Button>
            </Form>
            <p className='text-center text-danger fw-bold mt-3'>New to Red-Onion? <Link to='/signup'>Please register!</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Login;