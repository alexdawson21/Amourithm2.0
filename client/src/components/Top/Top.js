import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Top.css';



const Top = (props)=>(
    <div>
    <h1>{props.name}</h1>
    <img src={props.image}/>
    <button onClick = {console.log(props.login)}>login</button>
    </div>
)
           
        
    


export default Top;

