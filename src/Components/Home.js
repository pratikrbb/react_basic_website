import React from "react"; 
// import { Link } from "react-router-dom";
import img2 from '../images/h1.svg';
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common description='Grow Your bussiness with'
            btn="Get started"
            img={img2}
            visit="/services"
            
            />
        </>
    );
}

export default Home;