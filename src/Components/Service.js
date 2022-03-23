import React from "react"; 

import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="my-4">
                <h2 className="text-center">Our Services!!!</h2>
            </div>
            <div className="container-fluid md-3">
                <div className="row gy-3 col-md-10 mx-auto">
                    {
                        Sdata.map((i,index)=>{
                            return (
                                <Card 
                                key={index}
                                imgsrc={i.imgsrc} 
                                title={i.title}
                                />
                            )
                        })
                    }
                </div>
            </div>  
        </>
    );
}

export default Service;