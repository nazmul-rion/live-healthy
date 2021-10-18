import React, { useState } from 'react'
import { Button, Card, Container, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import logo from '../../images/favicon.ico'

const SignUpPage = () => {

    const { signInWithGoogle, signUpUser, error } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validated, setValidated] = useState(false);

    const handleNameChange = e => {
        setName(e.target.value);
        setValidated(true);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setValidated(true);
    }

    const handlePassChange = e => {
        setPass(e.target.value);
        setValidated(true);
    }

    const signinWithEmailPasswordHandler = e => {
        e.preventDefault();
        if (email !== '' && pass !== '' && name !== '') {
            signUpUser(email, pass, name);
        }
    }

    return (
        <Container fluid className="bg-custom">
            <div className="d-flex justify-content-center align-items-center">
                <Image src={logo} alt="logo" />
                <h2 className="text-center text-highlighted fw-bold">Live Healthy</h2>
            </div>

            <Container fluid className="row justify-content-center">
                <Card className="sign-card col mb-5">
                    <Form validated={validated} className="mt-5 mx-2 mb-3">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control onBlur={handleNameChange} type="text" placeholder="Enter Full Name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassChange} type="password" placeholder="Password" required />
                        </Form.Group>
                        {
                            error !== '' ? (<p className="text-danger"> {error}</p>) : (<></>)
                        }
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                            <Button onClick={signinWithEmailPasswordHandler} variant="primary" type="submit">
                                Singn Up
                            </Button>
                            <Button className="m-3" onClick={signInWithGoogle}>
                                <i onClick={signInWithGoogle} className="fab fa-google-plus"></i> Sign Up With Google</Button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link className="text-decoration-none fw-bold" to="/signin">Aready have an Account?</Link>
                        </div>
                    </Form>
                </Card>

            </Container>


        </Container>
    )
}

export default SignUpPage
