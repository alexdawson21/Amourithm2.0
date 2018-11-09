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
import './App.css';
import axios from "axios";

class App extends Component {

  state = {
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
    suitors:[ 
      {
        "id": 1,
        "image": "image1.jpeg",
        "name": "Tom"
      },
      {
        "id": 2,
        "image": "image2.jpeg",
        "name": "John"    
      },
      {
        "id": 3,
        "image": "image3.jpeg",
        "name": "Alex"
      },

      {
        "id": 5,
        "image": "image5.jpeg",
        "name": "Cameron"
      },
      {
        "id": 6,
        "image": "image6.jpeg",
        "name": "Josh"
      },
      {
        "id": 7,
        "image": "image7.jpeg",
        "name": "Sara"
      },
      {
        "id": 8,
        "image": "image8.jpeg",
        "name": "Beth"
      },
      {
        "id": 9,
        "image": "image9.jpeg",
        "name": "Alice"
      },
      {
        "id": 10,
        "image": "image10.jpeg",
        "name": "Claire"
      },
      {
        "id": 11,
        "image": "image11.jpeg",
        "name": "Blake"
      },
    
    ],
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

  render() {
    return (
    <div className = "mainbody">
      <Navbar/>
      <Heading/>
      {/* <Top
  image={this.state.profile.image} 
  name = {this.state.profile.name}/><br></br>
  <Preferences 
  movies={this.state.profile.favMovies}
  books={this.state.profile.favBooks}
  shows={this.state.profile.favShows}
  graphics={this.state.profile.favGraphics}
  hobbies={this.state.profile.favHobbies}
  music={this.state.profile.favMusic}/><br></br>
  <Bio 
  bio = {this.state.profile.bio}/> */}
  <Create/>
 
  <Suitors
  suitors = {this.state.suitors}/>
  </div>
    );
  }
}

export default App;