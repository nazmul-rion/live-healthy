import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const SigninPage = () => {

    const { signInWithGoogle } = useAuth();

    return (
        <Container fluid>
            <h1>Welcome</h1>
            <Button onClick={signInWithGoogle}>Sign in With Google</Button>
        </Container>


    )
}

export default SigninPage
