import React, { Component } from 'react';
import "./Profile.css";
import Navbar from "../Navbar";
import Top from "../Top";
import Bio from "../Bio";
import Preferences from "../Preferences";
import Chat from "../Chat";
import axios from "axios";

class Profile extends Component{
    state= {
        image: this.props.image,
        name: this.props.name,
        movies: this.props.movies,
        books:this.props.books,
        shows: this.props.shows,
        graphics: this.props.graphics,
        hobbies: this.props.hobbies,
        music: this.props.music,
        bio: this.props.bio
    }

    
    render(){
        return(
           <div>
            <Navbar
            suitorPage={this.props.suitorPage}
            profilePage={this.props.profilePage}
            matchPage={this.props.matchPage}/>
            <Top
             image={this.state.image} 
             name = {this.state.name}/>
            <Preferences
             movies={this.state.movies}
             books={this.state.books}
             shows={this.state.shows}
             graphics={this.state.graphics}
             hobbies={this.state.hobbies}
             music={this.state.music}
             />
            <Bio
             bio = {this.state.bio}/>
           
           </div> 
        )
    }
}

export default Profile;