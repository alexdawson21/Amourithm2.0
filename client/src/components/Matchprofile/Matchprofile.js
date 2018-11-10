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
        profile: {
            image: this.props.image,
            seeking: this.props.seeking,
            name: this.props.name,
            bio: this.props.bio,
            favBooks: this.props.books,
            favGraphics: this.props.graphics,
            favMovies: this.props.graphics,
            favShows: this.props.shows,
            favHobbies: this.props.hobbies,
            favMusic: this.props.music,
            
        },
    }

    render(){
        return(
           <div>
            <Top
            image = {this.state.profile.image}
            name = {this.state.profile.name}/>
            <Preferences
            movies={this.state.profile.favMovies}
            books={this.state.profile.favBooks}
            shows={this.state.profile.favShows}
            graphics={this.state.profile.favGraphics}
            hobbies={this.state.profile.favHobbies}
            music={this.state.profile.favMusic}/>
            <Bio
            bio={this.state.profile.bio}/>
            <Chat />
           </div> 
           
        )
    }

}

export default Matchprofile;