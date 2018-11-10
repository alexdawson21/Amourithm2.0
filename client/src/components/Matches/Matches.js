import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Matches.css';
import Matchprofile from "../Matchprofile";
import Navbar from "../Navbar";
import axios from 'axios';
     
    
class Matches extends Component {
    state = {
        showMatch: false,
        profile: {
            image: this.props.matches[0].image,
            seeking: this.props.matches[0].seeking,
            name: this.props.matches[0].name,
            bio: this.props.matches[0].bio,
            favBooks: this.props.matches[0].favBooks,
            favGraphics: this.props.matches[0].favGraphics,
            favMovies: this.props.matches[0].favMovies,
            favShows: this.props.matches[0].favShows,
            favHobbies: this.props.matches[0].favHobbies,
            favMusic: this.props.matches[0].favMusic,
            
        },
    }

    matcher = () =>{
        
    } 

openMatch = () =>{
 this.setState({showMatch: true})
}

    render(){
        return(
            <div>
            <Navbar
            suitorPage={this.props.suitorPage}
            profilePage={this.props.profilePage}
            matchPage={this.props.matchPage}/>             
    <div className="suitorbox"> 
          {this.props.matches.map(match =>
            <div>
                <h1>Potential Matches</h1>
                <h3>{match.name}</h3>
            <img src = {match.image} onClick={this.openMatch}></img>
            </div>
            )}

        </div>)
        {this.state.showMatch?
      <Matchprofile
            image = {this.state.profile.image}
            name = {this.state.profile.name}
            movies={this.state.profile.favMovies}
            books={this.state.profile.favBooks}
            shows={this.state.profile.favShows}
            graphics={this.state.profile.favGraphics}
            hobbies={this.state.profile.favHobbies}
            music={this.state.profile.favMusic}
            bio={this.state.profile.bio}
      />
    :null}
            </div>
        )
    }
}


export default Matches;