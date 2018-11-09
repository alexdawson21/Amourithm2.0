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
                <h1>Add your profile picture!</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                        Add Image
                    </button>
                </div>
            </div>
        <form id = "Userinfo">
            <label>Email</label>
            <input 
            type="email"
            name="email"
            placeholder="email"
            onChange={e => this.change(e)} ></input>
            <label>Password</label>
            <input 
            type="text"
            name="password"
            placeholder="password"
            onChange={e => this.change(e)} ></input>
            <label>Name</label>
            <input 
            type="text"
            name="name"
            placeholder="name"
            onChange={e => this.change(e)} ></input>
            <form>
                <label>Gender</label>
                <input 
                type="radio"
                id = "gmale"
                name="gender"
                value="male"
                onChange={e => this.radioForm(e)} ></input>
                <label for="gmale">Male</label>
                <input 
                type="radio"
                id = "gfemale"
                name="gender"
                value="female"
                onChange={e => this.radioForm(e)} ></input>
                <label for="gfemale">Female</label>
            </form>
            <form>
                <label>Interested in?</label>
                <input 
                type="radio"
                id = "smale"
                name="seeking"
                value="male"
                onChange={e => this.radioForm(e)} ></input>
                <label for="smale">Male</label>
                <input 
                type="radio"
                id = "sfemale"
                name="seeking"
                value="female"
                onChange={e => this.radioForm(e)} ></input>
                <label for="sfemale">Female</label>
            </form>
        </form>

        <form id = "favourites">
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

                <label>Favorite Comics/Manga/Graphic Novels</label>
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