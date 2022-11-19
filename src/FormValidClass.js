import React, { Component } from 'react'

export class FormValidClass extends Component {
    state= {
        username:"",usernameInvalid:false,
        email:"",emailInvalid:false,
        password:"",passwordInvalid:false,
        errMsg:{username:"",email:"",password:""}
    }
    onChange=(e=>{
        this.setState({[e.target.name]: e.target.value})
    })
    onSubmit=(e)=>{
        e.preventDefault()
        const rxNoCapLet = /^[a-z][a-z0-9_]*$/
        if(!this.state.username){
            this.setState({usernameInvalid:true})
            this.setState({errMsg:{username:"Input username"}})
        }
        else if(!rxNoCapLet.test(this.state.username)){
            this.setState({usernameInvalid:true})
            this.setState({errMsg:{username:"No Capital Letters allowed."}})
        }
        else{
            this.setState({usernameInvalid:false})
        }
    }
    
    render() {
        console.log(this.state);
    return (
        <div>
        <form onSubmit={this.onSubmit}>
            <label>Username</label>
            <input type="text" name='username' onChange={this.onChange}/>{this.state.usernameInvalid&&<h1>{this.state.errMsg.username}</h1>}<br/>
            <label>Email Address</label>
            <input type="email" name='email'  onChange={this.onChange}/><br/>
            <label>Password</label>
            <input type="password" name='password' onChange={this.onChange}/><br/>
            <label>Confirm Password</label>
            <input type="password"/><br/>
            <input type="submit"/>
        </form>
    </div>
    )
  }
}

export default FormValidClass