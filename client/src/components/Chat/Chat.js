import React, { Component } from 'react';
import './Chat.css';
import axios from 'axios';
import openSocket from 'socket.io-client';
const socket = openSocket();

class Chat extends Component {
   constructor(props) {
       super(props);
       this.state = {
           messages: []
       };
   };

   componentDidMount() {
       socket.emit('subscribeToTimer');

       socket.on('timer', () => {
           console.log("ping");
           axios.get("/api/messages")
               .then(response => {
                   let newMessages = [];
                   for (var i = 0; i < response.data.length; i++) {
                       newMessages.push(response.data[i]);
                   };
                   this.setState({
                       messages: newMessages
                   });
               })
               .catch(function (error) {
                   console.log(error);
               });
       });

       socket.on('user connected', socketID => {
           let message = {
               content: `Socket ID: ${socketID} has connected!`,
               timestamp: new Date
           };
           let newMessages = this.state.messages;
           newMessages.push(message);
           this.setState({
               messages: newMessages
           });
       });

       socket.on('user disconnected', socketID => {
           let message = {
               content: `Socket ID: ${socketID} has disconnected.`,
               timestamp: new Date
           };
           let newMessages = this.state.messages;
           newMessages.push(message);
           this.setState({
               messages: newMessages
           });
       });
   };

   componentWillUnmount() {
       socket.emit('unsubscribeToTimer');
   };

   handleSubmit = event => {
       event.preventDefault();
       let message = document.getElementById('chatInput');

       axios.post("/api/messages", {
           content: message.value,
           timestamp: new Date
       })
           .then(response => {
               let oldMessages = this.state.messages;
               oldMessages.unshift(response.data);
               this.setState({
                   messages: oldMessages
               });


           })
           .catch(function (error) {
               console.log(error);
           });

       message.value = "";
   };

   render() {
       return (
           <div className='container'>
               <h3>Chat box: </h3>
               <div id="chatbox" className="text-center">
                   {this.state.messages.map(message => (
                       <div>
                           <p className="text-left">{`${message.timestamp}: ${message.content}`}</p>
                           <br></br>
                       </div>
                   ))}
               </div>
               <form id="chatControl">
                   <input type='text' className='form-control' id='chatInput'></input>
                   <input type='submit' id='chatSubmit' className='btn btn-primary btn-block' onClick={this.handleSubmit}></input>
               </form>
               <br></br>
           </div>
       );
   };
};

export default Chat;