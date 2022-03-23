import React, { useState } from "react"; 
import img3 from '../images/h3.svg';


const Contact = () => {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [msg,setMsg] = useState('');
    return (
        <>
            <div className="my-4">
                <h2 className="text-center">Contact us</h2>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-5 col-10 mx-auto">
                        <div className="mb-2">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" 
                            id="exampleFormControlInput1" placeholder="Enter Your name"
                            name=''
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                        </div>

                        <div className="mb-2">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" 
                            id="exampleFormControlInput1" placeholder="Enter mobile number"
                            name=''
                            value={phone}
                            onChange={(e)=>{setPhone(e.target.value)}} />
                        </div>

                        <div className="mb-2">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" 
                            id="exampleFormControlInput1" placeholder="name@example.com" 
                            name=''
                            value={phone}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>


                        <div className="mb-2">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            name=''
                            value={msg}
                            onChange={(e)=>{setMsg(e.target.value)}}>
                            </textarea>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                    
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 header-img d-flex flex-column">
                        <img src={img3} className='custom_img' alt='home_img' /> 
                    </div>
                </div>

            </div>
        </>
    );
}

export default Contact;