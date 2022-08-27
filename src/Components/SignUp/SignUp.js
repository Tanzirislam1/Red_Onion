import React, { useState } from 'react';
import './SignUp.css';
import { Button, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // updateProfile
    const [updateProfile, profileUpdating, profilerror] = useUpdateProfile(auth);

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

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }

        /* create user with update profile async await : amra jokhon createUserWithEmailAndPassword kore user k create kortase then user k create kore amra user profile k update kortase....amra user k create kora porjonto awit kortase then jokhon user create hocche tokhon user profile update kortase aikhane amra name field k update kortase kinto aikhane displayName diye amra profile k update kortase kinto amader name field k name variable diye access kortase aikhane amra name varibale k displayName kore dite pari abar amra displayName jeheto object so amra displayName er value hisabe amra name variabale k set korte pari karon amra name field k jeikhane access kortase ter variable name hocche name...amra user profile update korar por notification dayoar jonne alert use korte pari abr abar toast o use korte pari....amra user profile update hocche kina sheita insure korte navigate keo use korte pari...amra aikhane navigate kortase home page er moddhe... */

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('User profile Update');
        alert('User profile Update');
        navigate('/home');
    }

    return (
        <div className='signup-food-background'>
            <div className="container">
                <h2 className='signup-title'>Please SignUp</h2>
                <Form onSubmit={handleSignUpSubmit} className='signup-form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" required />
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