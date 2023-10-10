import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import "../Styles/Testimony.css";


export default function Testimony(props){
    const stars = {
        '1': "★☆☆☆☆",
        '2': "★★☆☆☆",
        '3': "★★★☆☆",
        '4': "★★★★☆",
        '5': "★★★★★",
    }

    return(
        <div className='testimonyCard'>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title >{props.data.name}</Card.Title>
                    <Card.Text>
                        {props.data.testimony}
                    </Card.Text>
                    <Card.Text> { stars[props.data.rating]} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )



}