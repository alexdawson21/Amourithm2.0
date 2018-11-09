import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Suitors.css';
const pictures =  ["images/image1.jpeg"]
const Suitors = ({suitors}) =>{ 
    return( 
        <div className="suitorbox"> 
          {suitors.map(suitor =>
            <div>
                <h1>Potential Matches</h1>
                <h3>{suitor.name}</h3>
                

            <img src = {"images/"+suitor.image}></img>
            </div>
            )}

        </div>)
    
}


export default Suitors;