import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <div className="container-fluid">
                                <Link className="navbar-brand" to='/'>Pr@t!K</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className='navbar-nav mb-2 mb-lg-0' style={{marginLeft:'auto'}}>

                                    <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page"
                                     activeClassName='active_menu' to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                    <Link className="nav-link" activeClassName='active_menu' to="/services">Services</Link>
                                    </li>

                                    <li className="nav-item">
                                    <Link className="nav-link" activeClassName='active_menu' to="/about">About</Link>
                                    </li>

                                    <li className="nav-item">
                                    <Link className="nav-link" activeClassName='active_menu' to="/contact">Contact</Link>
                                    </li>
                                </ul>
                                    
                                    
                                
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;