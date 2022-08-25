import React, { useState } from 'react';
import './SignUp.css';
import { Button, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    /* google provider from react-firebase-hooks */
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    /* create user with email password from react-firebase-hooks */
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignInGoogle = () => {
        signInWithGoogle();
    }

    if (user || createUser) {
        navigate('/home');
    }

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-white'>Error: {error.message}</p>
        </div>
    }

    if (createError) {
        errorElement = <p className='text-white'>Error: {createError.message}</p>
    }

    if (loading || createLoading) {
        return <Loading></Loading>
    }

    const handleSignUpSubmit = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        else {
            return <p className='text-white'>Wrong password</p>
        }

    }

    return (
        <div className='signup-food-background'>
            <div className="container">
                <h2 className='signup-title'>Please SignUp</h2>
                <Form onSubmit={handleSignUpSubmit} className='signup-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />

                    </Form.Group>
                    <Button disabled={!agree} className='signup-submit-btn' type="submit">
                        SignUp
                    </Button>
                    <p className='text-white mt-4'>Already have an Account Then Please? <Link className='text-white' to="/login">Login</Link></p>
                    {errorElement}
                </Form>

                <div className="signup-google-login">
                    <button onClick={handleSignInGoogle} className='signup-google-btn'><Google className='signup-google-icon-img' /> <span >Google Signin</span></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;