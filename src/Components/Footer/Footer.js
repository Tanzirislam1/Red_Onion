import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo2.png';

const Footer = () => {
    return (
        <div className='footer-background'>
            <div className="footer-container container">
                <div>
                    <img className='footer-logo' src={footerLogo} alt="" />
                </div>

                <div className='text-white'>
                    <h5 className='pb-2'>Terms</h5>
                    <p>About Online Food</p>
                    <p>Read Our blog</p>
                    <p>Sign up to Deliver</p>
                    <p>Add your Resturant</p>
                </div>

                <div className='text-white'>
                    <h5 className='pb-2'>Privacy</h5>
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View All cities</p>
                    <p>Resturant near me</p>
                </div>
                
            </div>
            <p className='text-white text-center mt-4'>Copy Right @ Created by Tanzir Islam</p>
        </div>
    );
};

export default Footer;