import React, { Component } from 'react';
import "./Login.css";
import axios from "axios";

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
console = () =>{
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
            alert("success")
        }
    },1500)
        // console.log(this.state.profile)
        // if(this.state.password !== this.state.profile.password){
        //     this.setState({profile: {}})
        //     alert("Password or email is incorrect.")
        // }
        // else{
        //     alert("login success")
        // }
    // })
}

    render(){
        return(
            <div>
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
            <button onClick={this.console} >loginset</button>
            <button onClick={this.log} >check profile</button>
            </div>
        )
    }
}
export default Login;