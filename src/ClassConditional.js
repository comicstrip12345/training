import React, { Component } from 'react'

export class ClassConditional extends Component {
    state={isLoggedin: true}
    render() {
        return (
            
                // this.state.isLoggedin ? <h1>Yes. You are logged In.</h1> : <h1>No. You are not Logged In</h1> // Ternary Operator
                this.state.isLoggedin && <h1>Yes. You are logged In.</h1> // Short Circuit Operator
        )
    }
}

export default ClassConditional