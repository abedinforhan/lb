import React from 'react';
import profile from '../images/profile-picture.jpg';
import './Navbar.css';




const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        {/* image boshbe */}

                         Idea                                 
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav   me-5 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link "  href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <img     className="profile-pic"   src={profile} ></img> 
                                 </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;