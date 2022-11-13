import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "../style/About.css";
import bg from '../images/2.jpg';
function About() {
    return (
        <>
        <Header />
        <div className='container'>
           <div className="row">
            <img src={bg} className="img2" alt="" />
           </div>
           <div className="row p-4">
            <h4><strong>Sukhdevi Bansaraj Public School was founded by Mr. Sachin Dubey in 2014. The main goal was to provide quality and efficient education to student of rural area. There were many obstruction while construction of school but founders fought it very well. He is still looking forward to improve the quality. He strongly believes in education and trust. <br />Some Quote that are pillars of school are : <br /> “Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.”  <br /> "Education is not preparation for life; education is life itself." <br /> "Your education is a dress rehearsal for a life that is yours to lead."</strong></h4>
           </div>
        </div>
        <Footer />
        </>
    );
}

export default About;