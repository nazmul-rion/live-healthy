import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import logo from '../../images/favicon.ico'

const Navigationbar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand >
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <Link className="text-decoration-none text-dark" to="/"><b>Live Healthy</b></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link className="text-decoration-none text-dark" to="/home">Home</Link> </Nav.Link>
                            <Nav.Link><Link className="text-decoration-none text-dark" to="/home">Home</Link> </Nav.Link>
                            <Nav.Link><Link className="text-decoration-none text-dark" to="/home">Home</Link> </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigationbar
