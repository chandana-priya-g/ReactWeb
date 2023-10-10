import React from "react";
import { useForm} from "react-hook-form";
import {useState} from 'react';
import moment, { max, min } from 'moment';
import { useNavigate } from "react-router-dom";

export default function BookingsForm(){

    const {register, errors, setSubmit} = useForm();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    //const submit = "";

   

    function handleSubmit() {
        navigate('/Confirmation')
    }

    return(
        <div className="form-div">
            <body>
                <div id='body-h'>
                    <h2> Reserve a Table</h2>
                </div>
                <form  onSubmit={handleSubmit}>
                    <label id = "dateid" htmlFor="res-date">Date</label>
                    <input type="date" id="res-date" required min={moment().format("YYYY-MM-DD")}  value={date} onChange={(e) => setDate(e.target.value)}/>
                    <label htmlFor="res-time">Time</label>
                    <select id="res-time " required  value={time} onChange={(e) => setTime(e.target.value)}>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="0" min="1" max="10" id="guests" required value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Just a special day</option>
                    </select>
                    <label htmlFor="res-fname">First Name</label>
                    <input type="text" id="res-fname" placeholder="First Name" required minLength={1} maxLength={50} value={fName} onChange={(e) => setFName(e.target.value)}/>
                    <label htmlFor="res-lname">Last Name</label>
                    <input type="text" id="res-lname" placeholder="Last Name" required minLength={1} maxLength={50} value={lName} onChange={(e) => setLName(e.target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="res-email" placeholder="Email" required minLength={4} maxLength={50} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="submit" id="res-submit" value="Make Your reservation" onSubmit={handleSubmit}/>
                </form>
            </body>
        </div>
    );
}