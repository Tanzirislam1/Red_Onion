import React, { useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import { Google } from 'react-bootstrap-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();

    // checkBox Agree state
    const [agree, setAgree] = useState(false);

    // google provider from react firebase hooks
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    console.log(error);

    // signIn with email and password from react firebase hooks
    const [
        signInWithEmailAndPassword,
        signInUser,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);

    // reset password from react-firebasooks
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const handleSignInGoogle = () => {
        signInWithGoogle();
    }

    /* redirected form */
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    if (signInUser) {
        navigate('/home');
    }

    // conditional rendering
    let errorElement;
    if (error) {
        errorElement = <p className='text-white'>Error: {error?.message}</p>;
    }

    if (signInError) {
        errorElement = <p className='text-white'>Error: {signInError?.message}</p>;
    }

    if (resetError) {
        errorElement = <p className='text-white'>Error: {resetError?.message}</p>;
    }

    console.log(signInError);

    if (loading || signInLoading || sending) {
        return <Loading></Loading>
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async (event) => {
        const email = event?.target?.email?.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
        }
        else {
            toast('Sent Email');
        }
    }

    return (
        <div className='food-background'>
            <div className="container">
                <h2 className='login-title'>Please Login</h2>
                <Form onSubmit={() => handleFormSubmit()} className='form'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                        {/* check-me-out: amra checkbox er moddhe click korle agree korbe ai kaj ta korte amra akta state declair korse and state er initial value false kore rakhse oi state ta k aikhane onclick er moddhe amra arrow function diye wrap kore setState er moddhe state k ulta vabe !state aivabe set kore dise...normally unagree thakbe jokhon amra click korbo tokhon agree korbe jodi unagree thake tahole amader login btn disabled thakbe agree korle inable hbe amra login button er moddhe disabled er moddhe state k !agree hisabe set kore dise....*/}
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Check me out" />
                        <p onClick={handleResetPassword} className='text-white forget-text'>Forget Password?</p>
                    </Form.Group>


                    {errorElement}
                    <Button disabled={!agree} className='submit-btn' type="submit">
                        Login
                    </Button>
                    <p className='text-white mt-4'>If You Are New In RedOnion then Please? <Link className='text-white' to="/signup">SignUp</Link></p>
                </Form>

                <div className="google-login">
                    <button onClick={handleSignInGoogle} className='google-btn'><Google className='google-icon-img' /> <span>Google Signin</span></button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;