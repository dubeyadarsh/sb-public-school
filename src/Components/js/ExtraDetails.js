import React from 'react';
import maths  from '../images/maths.jpg';
import science  from '../images/science.jpg';
import history  from '../images/culhist.jpg';
import arts  from '../images/arts.jpg';
import wellness  from '../images/wellness.jpg';
import tech  from '../images/tech.jpg';
import "../style/ExtraDetails.css";
const ExtraDetails = () => {
    return (
        <div className='bgl p-5'>
       <div className="row my-2">
        <div className="col-7 col-sm-12" > <h2 style={{fontWeight:"bold"}} > Learn how integration unfolds in the classroom. </ h2> </div>
      
       </div>

       <div className="row">
       <div className="col-12 col-md-4 col-lg-4 px-auto">
        <a href="https://www.storyofmathematics.com/">
        <img className='subimg' src={maths} alt="" />
        </a>
        
        <h2 className='text-center'>Mathematics</h2>
       </div>
      <div className="col-12 col-md-4 col-lg-4">
        <a href="https://www.isro.gov.in/">
        <img className='subimg'  src={science} alt="" />
        </a>
        
        <h2 className='text-center'>Science</h2>
        
        </div>
      <div className="col-12 col-md-4 col-lg-4">
        <a href="https://www.samhealth.org.sg/understanding-mental-health/what-is-mental-wellness/#:~:text=The%20Importance%20of%20Mental%20Wellness,strong%20relationships%20and%20enjoy%20life.">
        <img className='subimg' src={wellness} alt="" />
        </a>
      
        <h2 className='text-center'>Wellness</h2>
      </div>
       </div>
       <div className="row">
       <div className="col-12 col-md-4 col-lg-4 px-auto">
        <a href="https://indianculture.gov.in/forts-of-india/history">
        <img className='subimg' src={history} alt="" />
        </a>
       
        <h2 className='text-center'>Cultural History</h2>
       </div>
      <div className="col-12 col-md-4 col-lg-4">
        <a href="https://artincontext.org/types-of-visual-art/">
        <img className='subimg'  src={arts} alt="" />
        </a>
        
        <h2 className='text-center'>Visual Arts</h2>
        
        </div>
      <div className="col-12 col-md-4 col-lg-4">
        <a href="https://www.loyola.edu/school-education/blog/2021/what-is-educational-technology"><img className='subimg' src={tech} alt="" /> </a>
      
        <h2 className='text-center'>Technology</h2>
      </div>
       </div>

        </div>
    );
};

export default ExtraDetails;