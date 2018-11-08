import React, { Component } from 'react';
import './Chat.css';
import axios from 'axios';
// import mongoose from "mongoose";
// import Messages from "../../models/Messages";
import openSocket from 'socket.io-client';
const socket = openSocket();

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timestamp: "No timestamp yet",
            messages: []
        };
    };

    componentDidMount() {
        socket.emit('subscribeToTimer', 1000);
        socket.on('timer', timestamp => {
            this.setState({
                timestamp: timestamp
            })
        });

        axios.get("/messages")
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // Messages.findAll({
        //     'receiver.id': socket.id
        // }).then(results => this.state.messages.push(results)).catch(err => res.json(err));
        // Messages.findAll({
        //     'sender.id': socket.id
        // }).then(results => this.state.messages.push(results)).catch(err => res.json(err));
    };

    handleSubmit = event => {
        event.preventDefault();
        let message = document.getElementById('chatInput').value;
        console.log(message);

        axios.post("/messages", message)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // Messages.create({
        //     content: message
        // }).then(newEntry => console.log(newEntry)).catch(err => res.json(err));
    };

    render() {
        return (
            <div className='container'>
                <h3>Chat box: </h3>
                <div id="chatbox" className="text-center">
                    {this.state.timestamp}
                    {this.state.messages.map(message => (
                        <p className="text-left">{message}</p>
                    ))}
                    <div id="chatControl">
                        <input type='text' className='form-control' id='chatInput'></input>
                        <input type='submit' id='chatSubmit' className='btn btn-primary btn-block' onClick={this.handleSubmit}></input>
                    </div>
                </div>
                <br></br>
            </div>
        );
    };
};

export default Chat;
