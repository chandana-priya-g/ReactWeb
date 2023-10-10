import React,{useState} from 'react';
import logoImg from "../icons_assets/restauranfood.jpg"; 
import { useNavigate } from "react-router-dom";
import "../Styles/LogoComponent.css";

export default function LogoComponent(){

    const navigate = useNavigate()

    function handleSubmit() {
        navigate('/booking')
    }

    return(
        <div className='logo-container'>
            <div className='intro-component'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                </p>
                <input type="submit" id="res-submit" value="Reserve a Table" onSubmit={handleSubmit}/>
            </div>
            <img 
            className="logo-image" 
            src={logoImg} 
            alt="Restaurant food Image" 
            />
        </div>
    )
}