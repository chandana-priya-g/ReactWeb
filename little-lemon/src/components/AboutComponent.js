import React,{useState} from 'react';
import aboutImg from "../icons_assets/Mario and Adrian A.jpg"; 
import "../Styles/AboutComponent.css";

export default function AboutComponent(){

    return(
        <div className='aboutComp-container'>
            <div className='data-component'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <br />
                <br />
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>
                    Velit officia consequat duis enim velit mollit. <br />
                    Exercitation veniam consequat sunt nostrud amet. <br/>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>
                    Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <img 
            className="about-image" 
            src={aboutImg} 
            alt="Mario and Adrian" 
            />
        </div>
    )
}