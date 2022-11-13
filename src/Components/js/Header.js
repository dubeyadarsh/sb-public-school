import React from 'react';
import "../style/Header.css";
import { IoIosSchool } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Header() {
    
    function open(e){
        e.preventDefault();
        document.getElementsByClassName("hamburger")[0].style.display="block";
    }
    function close(e){
        e.preventDefault();
        document.getElementsByClassName("hamburger")[0].style.display="none";
    }
  
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <IoIosSchool size={45} />
        <a class="navbar-brand mt-2 ml-1 " href="/"> <h3 className='head'>S. B. PUBLIC SCHOOL</h3></a>
        <div className='ml-auto d-flex'>
            <div class="links mt-3"> 
            <a className='m-1 text-dark h6'   href="/">Home |</a>
            <a className='m-1 text-dark h6'  href="/login">Portal |</a>
            <a className='m-1 text-dark h6'  href="/about">About |</a>
            <a className='m-1 text-dark h6'  href="/contact">Contact</a>
            </div>
            
            <button className='btn' onClick={open}><AiOutlineMenu size={35} /> </button>
        </div>
        
        
        <div className='hamburger'>
            
            <button className='closeButton btn' onClick={close}> <ImCross  size={45} /></button>
            <div className='ml-auto innerbox'>
                <button className="btn text-light m-2"> <a href="/"><h4> Home </h4> </a></button>
                <br />
                <button className="btn text-light m-2"> <a href="https://www.cbse.gov.in/"> <h4>Discover </h4> </a></button>
                <br />
                <button className="btn text-light m-2"><a href="https://dailysciencefiction.com/"> <h4> Learning </h4> </a></button>
                <br />
                <button  className="btn text-light m-2"><a href=""> <h4> Programs  </h4> </a></button>
                <br />
                <button className="btn text-light m-2"><a href="">  <h4>Insides </h4> </a></button>
                <br />
                <button className="btn text-light m-2"> <a  href="tel:9648796060"> <h4>Admission </h4> </a></button>
                <br />
                <button className="btn text-light m-2"> <a href="/about"> <h4> Community </h4></a> </button>
                <br />
                <button className="btn text-light m-2"><a href="/login"> <h4> Portal </h4> </a></button>
                <br />
                <button className="btn text-light m-2"> <a href="/contact"><h4> Contact Us </h4> </a></button>
               
            </div>
        </div>
       
       
  
    
      </nav>
    );
}

export default Header;