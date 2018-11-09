import React, { Component } from 'react';
import Bio from "./components/Bio";
import Preferences from "./components/Preferences";
import Top from "./components/Top";
import API from "./utilities/API";
import Create from "./components/Create";
import Suitors from "./components/Suitors";
import Chat from "./components/Chat";
import Login from "./components/Login";
import './App.css';
import axios from "axios";

class App extends Component {

  state = {
    login: "",
    profile: {
        image:"",
        seeking: "",
        name: "",
        bio: "",
        favBooks: [],
        favGraphics: [],
        favMovies: [],
        favShows: [],
        favHobbies: [],
        favMusic: [],
        
    },
    suitors:[],
  };

  componentDidMount() {
    //request to load in the users profile, will be changed to be based on ID once synced with login
    axios.get("api/profile")
    .then(res=>this.setState({profile: res.data[14]}))
  setTimeout(()=>{console.log(this.state.profile)},1000)
    //requesto to load potential matches. Is set to timeout so that user preferences can be loaded in.
    //res.data should be an array of users matching the gender designation.
    //res.data is assigned to this.state.suitors which is then passed into the suitors component as props. 
    setTimeout(()=>{
      if(this.state.profile.seeking === "male"){
        axios.get("api/suitors/men")
        .then(res=>this.setState({suitors: res.data}))
      }
      else if(this.state.profile.seeking === "female"){
        axios.get("api/suitors/women")
        .then(res=>this.setState({suitors: res.data}))
      }
    },2000)
    setTimeout(()=>{
      console.log(this.state.suitors)
    },3000)
  }
  change = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
loginTry = () =>{

}

  loginSuccess = () =>{
    
  }

  render() {
    return (
    <div>
      <Top
  login = {this.state.login}    
  image={this.state.profile.image} 
  name = {this.state.profile.name}/><br></br>
  {/* <Preferences 
  movies={this.state.profile.favMovies}
  books={this.state.profile.favBooks}
  shows={this.state.profile.favShows}
  graphics={this.state.profile.favGraphics}
  hobbies={this.state.profile.favHobbies}
  music={this.state.profile.favMusic}/><br></br>
  <Bio 
  bio = {this.state.profile.bio}/>
   <Create/> */}
 <Login
 loginSuccess= {this.loginSuccess}
 login = {this.login}
 change = {this.change}/>
  {/* <Suitors
  suitors = {this.state.suitors}/> */}
  </div>
    );
  }
}

export default App;