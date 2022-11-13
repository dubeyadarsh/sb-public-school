import React from 'react';
import "../style/AboutFounder.css";
import founder1 from '../images/Founder1.jpg';

function AboutFounder() {
    return (
        <div className="container my-4" style={{backgroundColor:"rgb(248,249,250)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"}}>
            <div className="row">
                <div className="col-md-6 col-lg-6">          
                 <img src={founder1} className="imgf1 mb-4 fphoto" alt="" />   
                 <h4 style={{fontWeight:"bold",textAlign:"center"}}> Mr. Girija Shankar Dubey</h4>                     
                 </div>
                <div className="col-md-6 col-lg-6 p-4">
                    <h4>
                    " School’s transformative model of education was founded by Mr. Girija Shankar in order to provide quality education to children. He had already worked in merchant navy and  had travelled many countries and have enough exposure about education system in each country. SO He knew how to build quality education system in the rural area. It's been more than 7 year and Now, we can say that he build his vision into reality."
                    </h4>
                </div>
            </div>
            <div className="row">
            <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default AboutFounder;