import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Bio.css';

const Bio = (props) =>(
            <div>
                <h2>Bio</h2>
                <p>{props.bio}</p>
            </div>
        )

export default Bio;