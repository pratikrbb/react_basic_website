import React from "react"; 
import { Link } from "react-router-dom";


const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-9 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.description} <strong className="brand-name">Maruti Steel</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented devloper making websites..
                                    </h2>
                                    <div className="mt-3">
                                        <Link to={props.visit} className='btn-get-started'>
                                            {props.btn}
                                        </Link>
                                    </div>

                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img d-flex flex-column">
                                    <img src={props.img} className='custom_img' alt='home_img' /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;