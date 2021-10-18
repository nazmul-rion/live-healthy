import React, { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import logo from '../../images/favicon.ico'

const Navigationbar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth();

    return (
        <>
            <Navbar className="bg-custom" expand="lg">
                <Container fluid>
                    <Navbar.Brand >
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Link className="text-decoration-none text-highlighted" to="/"><b>Live Healthy</b></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="text-decoration-none text-dark" to="/home">Home</Link>
                            <Link className="text-decoration-none text-dark" to="/home">Home</Link>
                            <Link className="text-decoration-none text-dark" to="/homse">Home</Link>

                        </Nav>
                        {user.displayName ? (
                            <>
                                <Navbar.Text>
                                    <img className="rounded rounded-circle" src={user.photoURL} alt="" srcset="" />
                                    Signed in as: {user.displayName}
                                </Navbar.Text>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    <Button variant="dark" onClick={() => history.push('/signin')}>Sign In</Button>{' '}
                                    <Button variant="dark" onClick={() => history.push('/signup')}>Sign Up</Button>{' '}
                                </Navbar.Text>
                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar
