import React from 'react';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';

const Card = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top s_img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
}

export default Card;