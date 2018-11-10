import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";
import Heading from "../Heading";

class Login extends Component {
    
    state = {
        email: "",
        password: 'dummy',
        name: "",
        profile: {}
    }

onChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
log = () => {
    console.log(this.state.profile)
}
Logger = () =>{
    axios.get("/api/profile/email",{
        params: {
            email: this.state.email,
        }
    })
    .then(res=> this.setState({profile:res.data[0]}),()=>{
    })
    setTimeout(()=>{
        if(this.state.profile.password !== this.state.password){
            this.setState({profile: {}})
            alert("wrong email or password")
        }
        else{
            this.props.loginSuccess(this.state.profile, false, true)
        }
    },1500)
}

    render(){
        return(
            
            <div>
            <Heading/>
                <form id = "Userinfo">
            <label>Email</label>
            <input 
            type="email"
            name="email"
            placeholder="email"
            onChange={e => this.onChange(e)} ></input>
            <label>Password</label>
            <input 
            type="text"
            name="password"
            placeholder="password"
            onChange={e => this.onChange(e)} ></input>
            </form>
            <button onClick={this.Logger} >Log in</button>
            <button onClick={this.props.register}>Register</button>
            </div>
        )
    }
}
export default Login;