import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import logo from '../../../images/logo2.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>
                        <img src={logo} width='150' alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-warning rounded-pill
                                    px-4'>LogOut</button>
                                : (<>
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                    <button onClick={() => navigate('/signup')} className='btn btn-danger rounded-pill
                                    px-4'>Sign up</button>
                                </>)
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;