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
            image:"",
            seeking: "",
            name: "",
            bio: "",
            favBooks: [1,2,3,4,5],
            favGraphics: [1,2,3,4,5],
            favMovies: [1,2,3,4,5],
            favShows: [1,2,3,4,5],
            favHobbies: [1,2,3,4,5],
            favMusic: [1,2,3,4,5],
            
            showMatch: false,
        }
    }
        openMatch = () =>{
            axios.get("api/profile")
            .then(res=>this.setState({profile: res.data[3]}))
            setTimeout(()=>{
                console.log(this.state.profile)
            },2000)
            setTimeout(()=>{this.setState({showMatch: true})},2000)
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
            matcher = {this.props.matcher}
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