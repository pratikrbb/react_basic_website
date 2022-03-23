import React from "react"; 
import img1 from '../images/h2.svg';
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common description='Welcome to about Page..'
            btn="Contact now"
            img={img1}
            visit="/contact" 
            />
        </>
    );
}

export default About;