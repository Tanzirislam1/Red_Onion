import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/home"><img src={logo} alt="" /></a>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <CustomLink className="nav-item" to="/home">Home</CustomLink>
                        <CustomLink className="nav-item" to="/services">Services</CustomLink>
                        <CustomLink className="nav-item" to="/serviceItem">Item</CustomLink>
                    </ul>
            
                    <Link to="/login" >
                        {user ? <button onClick={logOut} className='login-btn'>LogOut</button> : <button className='login-btn'>Login</button>}
                    </Link>
                    <Link to="/signup">
                        <button className='signup-btn'>SignUp</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;