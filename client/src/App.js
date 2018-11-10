import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Bio from "./components/Bio";
import Preferences from "./components/Preferences";
import Top from "./components/Top";
import API from "./utilities/API";
import Create from "./components/Create";
import Suitors from "./components/Suitors";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Matches from "./components/Matches"
import './App.css';
import axios from "axios";
import Suitorprofile from './components/Suitorprofile';

class App extends Component {

  state = {
    login: "",
    suitors:[],
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
        matches:[]
    },
    suitorProfile: {
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
    },
    matchProfile: {
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
    },
    loginView: true,
    registerView: false,
    profileView: false,
    suitorsView: false,
    matchesView: false,
    matchProfileView: false,
    suitorProfileView: false
  }
  change = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}


  loginSuccess = (profile, loginView, profileView) =>{
    console.log("logged in")
    this.setState({
      profile: profile,
      loginView: loginView,
      profileView: profileView
    })
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

  registerPage = () =>{
    this.setState({
      loginView: false,
    registerView: true,
    suitorsView: false,
      matchesView: false,
    })
  }
  loginPage=()=>{
    this.setState({
      loginView: true,
      registerView: false,
      profileView: false,
      suitorsView: false,
      matchesView: false,
      matchProfileView: false,
      suitorProfileView: false
    })
  }
  profilePage=()=>{
    this.setState({
      loginView: false,
      registerView: false,
      profileView: true,
      suitorsView: false,
      matchesView: false,
      matchProfileView: false,
      suitorProfileView: false
    })
  }
  suitorPage=()=>{
    this.setState({
      loginView: false,
      registerView: false,
      profileView: false,
      suitorsView: true,
      matchesView: false,
      matchProfileView: false,
      suitorProfileView: false
    })
  }
  matchPage=()=>{
    this.setState({
      loginView: false,
      registerView: false,
      profileView: false,
      suitorsView: false,
      matchesView: true,
      matchProfileView: false,
      suitorProfileView: false
    })
  }
  matchProfilePage=()=>{
    this.setState({
      loginView: false,
      registerView: false,
      profileView: false,
      suitorsView: false,
      matchesView: true,
      matchProfileView: true,
      suitorProfileView: false
    })
  }
  suitorProfilePage=()=>{
    this.setState({
      loginView: false,
      registerView: false,
      profileView: false,
      suitorsView: true,
      matchesView: false,
      matchProfileView: false,
      suitorProfileView: true
    })
  }
  setSuitor = (suitor) =>{
    this.setState({suitorProfile: suitor})
    setTimeout(()=>{
      console.log(this.state.suitorProfile)
    },1000)
  }
  matcher =()=>{
    console.log("hey")
    axios.get("api/profile")
    .then(res=>this.state.profile.matches.append(res.data[3]))
    setTimeout(()=>{
      console.log(this.state.profile)
    },1500)
  }

  render() {
    return (

    <div className = "mainbody">

   
    {this.state.suitorsView?
      <Suitors
      matcher={this.matcher}
      profiler={this.setSuitor}
      suitors = {this.state.suitors}
      suitorPage={this.suitorPage}
      profilePage={this.profilePage}
      matchPage={this.matchPage}
      matchProfile={this.matchProfilePage}
      suitorProfile={this.suitorProfilePage}
      />
    :null}
    {this.state.matchesView?
      <Matches
      matches={this.state.profile.matches}
      
      profiler={this.setSuitor}
      suitors = {this.state.suitors}
      suitorPage={this.suitorPage}
      profilePage={this.profilePage}
      matchPage={this.matchPage}
      matchProfile={this.matchProfilePage}
      suitorProfile={this.suitorProfilePage}
      />
    :null}
{this.state.registerView?
  <Create
  loginPage= {this.loginPage}/>
:null}
{this.state.profileView?
  <Profile
  suitorPage={this.suitorPage}
  profilePage={this.profilePage}
  matchPage={this.matchPage}
  image={this.state.profile.image} 
  name = {this.state.profile.name}
   movies={this.state.profile.favMovies}
   books={this.state.profile.favBooks}
   shows={this.state.profile.favShows}
   graphics={this.state.profile.favGraphics}
   hobbies={this.state.profile.favHobbies}
   music={this.state.profile.favMusic}
   bio = {this.state.profile.bio}/>
  :null}
  {this.state.loginView?
 <Login
 register = {this.registerPage}
 loginSuccess= {this.loginSuccess}
 login = {this.login}
 change = {this.change}/>
 :null}
  </div>
    );
  }
}

export default App;