import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/favicon.ico'

const Footer = () => {
    return (
        <footer className="text-white bg-custom2">
            <div className="row mx-5 py-5">
                <div className="col m-2">
                    <div className="d-flex align-items-center flex-column flex-md-row mb-5">
                        <img src={footerLogo} alt="brand name" className="img-fluid" />
                        <h6><Link className="text-decoration-none text-white fw-bold ms-3" to="/">Live Healthy</Link></h6>
                    </div>
                    <p>
                        Regular dental checkups help in detection of early warning signs of
                        certain health related issues. Visit your dentists regularly and
                        stay healthy.
                    </p>
                </div>

                <div className="col m-2 ms-lg-5">
                    <h2 className="underline">Treatments</h2>
                    <p>Cosmetic Dentistry</p>
                    <p>Preventative Dentistry</p>
                    <p>Periodontal Therapy</p>
                    <p>Affordable Dentures</p>
                </div>

                <div className="col m-2">
                    <h2 className="underline">Help & Support</h2>
                    <p>Live Chat</p>
                    <p>Privacy Policy</p>
                    <p>Faqs</p>
                </div>

                <div className="col m-2">
                    <h2 className="underline">Contacts</h2>
                    <h6>
                        <i className="fas fa-map-marker-alt"></i> Chattogram Port Hospital, Port Colony Rd, Chattogram
                    </h6>
                    <h6>
                        <i className="fas fa-phone-alt"></i> +88 01611269298
                    </h6>
                    <h6>
                        <i className="fas fa-paper-plane"></i> livehealthy@gmail.com
                    </h6>
                    <div className="mt-3 fw-bold fs-3 icon-color">
                        <a
                            href="https://www.facebook.com/nazmulrion1/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-square me-3 text-white"></i>
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter me-3 text-white"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/nazmul-rion/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin me-3 text-white"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram-square text-white"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
