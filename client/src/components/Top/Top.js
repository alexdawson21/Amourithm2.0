import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Top.css';



const Top = (props)=>(
    <div>
    <h1>{props.name}</h1>
    <img src={props.image}/>
    </div>
)
           
        
    


export default Top;

