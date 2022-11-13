import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Contact() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 style={{fontWeight:"bold"}}>Drop a mail to Us</h2>
                <div className='bg-dark text-light p-3 m-2'>
                <form >
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Your Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Your Query</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group text-center" >
                        <button className='btn btn-primary'>Send</button>
                    </div>
                </form>

                </div>

                <div className="container mt-3 mb-2">
                    <h6>
                        <strong>Gmail :</strong>sbpublicschool2014@gmail.com
                    </h6>
                    <h6>
                        <strong>Mobile Number :</strong> 9648796060
                    </h6>
                </div>
               
            </div>
            <Footer />
        </div>
    );
}

export default Contact;