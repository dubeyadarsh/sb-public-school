import React from 'react';
import "../style/Animation.css";
import video from '../images/video.mp4';
function Animation() {
    return (
        <div className="video-container">
           <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            </video>
            <div class="caption">
              <h2 style={{fontWeight:"bold"}}>Dynamic Curriculum </h2>
              <br />
              <h4 style={{fontWeight:"bold"}}>It is constructed as a narrative that charts the evolution of human consciousness and is taught chronologically through the grades at S. B. Public School</h4>
             </div>
        </div>
    );
}

export default Animation;