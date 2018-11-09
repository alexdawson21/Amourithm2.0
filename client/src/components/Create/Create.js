import React, { Component } from 'react';
import "./Create.css";
import axios from "axios";
import cloudinary from "cloudinary-react";

class Create extends Component {
    state ={
        image: "",
        newProfile: {},
        email: '',
        password:'',
        name: '',
        gender: '',
        seeking: '',

        favMovies: [],
        movieOne: '',
        movieTwo: '',
        movieThree: '',
        movieFour: '',
        movieFive: '',

        favBooks: [],
        bookOne: '',
        bookTwo: '',
        bookThree: '',
        bookFour: '',
        bookFive: '',

        favShows: [],
        showOne: '',
        showTwo: '',
        showThree: '',
        showFour: '',
        showFive: '',

        favGraphics: [],
        graphOne: '',
        graphTwo: '',
        graphThree: '',
        graphFour: '',
        graphFive: '',

        favMusic: [],
        musicOne: '',
        musicTwo: '',
        mmusicThree: '',
        musicFour: '',
        musicFive: '',

        favHobbies: [],
        hobbyOne: '',
        hobbyTwo: '',
        hobbyThree: '',
        hobbyFour: '',
        hobbyFive: '',
    }

    change = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    radioForm = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    setFaves = (e) =>{
        e.preventDefault();
        this.setState({
            favMovies: [this.state.movieOne,this.state.movieTwo,this.state.movieThree,this.state.movieFour,this.state.movieFive,],
            favShows: [this.state.showOne,this.state.showTwo,this.state.showThree,this.state.showFour,this.state.showFive,],
            favBooks: [this.state.bookOne,this.state.bookTwo,this.state.bookThree,this.state.bookFour,this.state.bookFive,],
            favGraphics: [this.state.graphOne,this.state.graphTwo,this.state.graphThree,this.state.graphFour,this.state.movieFive,],
            favMusic: [this.state.musicOne,this.state.musicTwo,this.state.musicThree,this.state.musicFour,this.state.musicFive,],
            favHobbies: [this.state.hobbyOne,this.state.hobbyTwo,this.state.hobbyThree,this.state.hobbyFour,this.state.hobbyFive,],
        })
    }
    setForm = (e) =>{
        e.preventDefault();
        this.setState({
            newProfile: {
                email: this.state.email,
                password: this.state.password,
                image: this.state.image,
                name: this.state.name,
                gender: this.state.gender,
                seeking: this.state.seeking,
                favBooks: this.state.favBooks,
                favGraphics: this.state.favGraphics,
                favHobbies: this.state.favHobbies,
                favMovies: this.state.favMovies,
                favMusic: this.state.favMusic,
                favShows: this.state.favShows,
                bio: this.state.bio
            }
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        axios.post("api/profile", this.state.newProfile);
        setTimeout(() => {
            console.log(this.state.newProfile)
        }, 1000);
    }

    uploadWidget = () =>{
        window.cloudinary.openUploadWidget({ cloud_name: 'hxgiperio', upload_preset: 'bttecqzu', tags:[]},
            (error, result)=> {
                console.log(result[0].url)
                setTimeout(()=>{
                    this.setState({image: result[0].url})
                },1500)
                
            });
    }

    render(){
        return(
<div>
<div className="main">
                <h1 id="rcorners1" >Add your profile picture!</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Upload Image
                    </button>
                </div>
            </div>
            <br></br>
        <form id = "rcorners2">
            <label>Email</label>
            <input 
            type="email"
            name="email"
            placeholder="..."
            onChange={e => this.change(e)} ></input>
            <label>Password</label>
            <input 
            type="text"
            name="password"
            placeholder="..."
            onChange={e => this.change(e)} ></input>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            placeholder="..."
            onChange={e => this.change(e)} ></input>
            <form>
                <label class="container">Gender</label>
                <input 
                type="checkbox"
                id = "gmale"
                name="gender"
                value="male"
                onChange={e => this.radioForm(e)} ></input>
                <label for="gmale">Male<br></br></label>
                <input 
                type="checkbox"
                id = "gfemale"
                name="gender"
                value="female"
                onChange={e => this.radioForm(e)} ></input>
               
                <label for="gfemale">Female<br></br></label>
            </form>
            <form>
                <br></br>
                <label>Interested in?</label>
                <br></br>
                <input 
                type="checkbox"
                id = "smale"
                name="seeking"
                value="male"
                onChange={e => this.radioForm(e)} ></input>
                <label for="smale">Male</label><br></br>
                <input 
                type="checkbox"
                id = "sfemale"
                name="seeking"
                value="female"
                onChange={e => this.radioForm(e)} ></input>
                <label for="sfemale">Female</label>
            </form>
        </form>
    <br></br>
        <form id = "rcorners3">
                <br></br>
                <label>Favorite Movies</label>
                <input
                type= "text"
                name="movieOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="movieTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="movieThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="movieFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="movieFive"
                onChange={e => this.change(e)} ></input>
                <br></br>
                <label>Favorite Shows</label>
                <input
                type= "text"
                name="showOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="showTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="showThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="showFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="showFive"
                onChange={e => this.change(e)} ></input>
                <br></br>
                <label>Favorite Books</label>
                <input
                type= "text"
                name="bookOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="bookTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="bookThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="bookFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="bookFive"
                onChange={e => this.change(e)} ></input>
                <br></br>
                <label>Favourite Graphic Novels</label>
                <input
                type= "text"
                name="graphOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="graphTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="graphThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="graphFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="graphFive"
                onChange={e => this.change(e)} ></input>
                <br></br>
                <label>Favorite Music</label>
                <input
                type= "text"
                name="musicOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="musicTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="musicThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="musicFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="musicFive"
                onChange={e => this.change(e)} ></input>
                <br></br>
                <label>Favorite Hobbies</label>
                <input
                type= "text"
                name="hobbyOne"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="hobbyTwo"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="hobbyThree"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="hobbyFour"
                onChange={e => this.change(e)} ></input>
                <input
                type= "text"
                name="hobbyFive"
                onChange={e => this.change(e)} ></input>
            </form>
            <br></br>
            <button onClick={e=>this.setFaves(e)}>Save Favourites</button>

            <form>
                <label>Bio</label>
                <input
                type="text"
                name="bio"
                placeholder="bio"
                onChange={e => this.change(e)}></input>
            </form>
            <button onClick={e =>this.setForm(e)}>Save info</button>
                
                <button onClick={e => this.onSubmit(e)}>Submit</button>

    </div>
        )
    }

}
    

export default Create;