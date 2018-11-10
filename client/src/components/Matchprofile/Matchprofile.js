import React, { Component } from 'react';
import "./Matchprofile.css";
import Navbar from "../Navbar";
import Top from "../Top";
import Bio from "../Bio";
import Preferences from "../Preferences";
import Chat from "../Chat";
import axios from "axios";

class Matchprofile extends Component{
    state= {
        
    }

    render(){
        return(
           <div>
            <Top/>
            <Preferences/>
            <Bio/>
            <Chat/>
           </div> 
        )
    }
}

export default Matchprofile;