import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AboutFounder from './AboutFounder.js';
import Animation from './Animation.js';
import ExtraDetails from './ExtraDetails.js';
import "../style/Home.css";
import { BsFillTelephoneFill } from "react-icons/bs";
function Home() {
    return (
        <div>
            <Header />
            <div className='mainimg'>
                <div className='typewritter h1'>
               The only private, nonprofit school on the East End serving Nursery through HSC. 

                </div>
            </div>
            <div className="school container">

            </div>
            <div className='container content text-center  '>
                <h5>Our mission is to change the way education meets the future; to foster interdisciplinary, integrated thinking and innovative leadership; to engage fully in the global community; and to facilitate lifelong learning.</h5>
                <button className="btn  admission">Admission</button>
            </div>
            <h3 className='FounderDetails'>Founders</h3>
            <AboutFounder /> 
            <Animation />
            <ExtraDetails />
            <button  className='btn bg-primary' style={{position:"fixed",left:"20px",bottom:"20px",fontSize:"1.3em",zIndex:"1"}}> <a className='text-light' href="tel:9648796060"> <BsFillTelephoneFill /> Admission Enquiry </a>  </button>
            <Footer />
        </div>
    );
}

export default Home;