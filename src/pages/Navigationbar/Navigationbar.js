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
                            <Link className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/home">Home</Link>
                            <Link className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/appointment">Make Appointment</Link>
                            <Link className="text-decoration-none text-dark mx-3 my-3 my-md-0" to="/about">About Us</Link>

                        </Nav>
                        {user.displayName ? (
                            <>
                                <Navbar.Text>
                                    <img className="rounded rounded-circle" height="40" width="40" src={user.photoURL} alt="N/A" />
                                    <b className="mx-3">{user.displayName}</b>
                                    <Button variant="danger" onClick={signOutUser}>Sign Out <i className="fas fa-sign-out-alt"></i></Button>{' '}
                                </Navbar.Text>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    <div className="d-flex">
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signin')}>Sign In</Button>{' '}
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signup')}>Sign Up</Button>{' '}
                                    </div>
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
