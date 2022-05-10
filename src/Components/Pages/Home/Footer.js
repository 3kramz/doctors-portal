import React from 'react';
// import { p } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <p className="p p-hover">Branding</p>
                    <p className="p p-hover">Design</p>
                    <p className="p p-hover">Marketing</p>
                    <p className="p p-hover">Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <p className="p p-hover">About us</p>
                    <p className="p p-hover">Contact</p>
                    <p className="p p-hover">Jobs</p>
                    <p className="p p-hover">Press kit</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="p p-hover">Terms of use</p>
                    <p className="p p-hover">Privacy policy</p>
                    <p className="p p-hover">Cookie policy</p>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;