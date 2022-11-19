import React, { Component } from 'react'
import UpdateComponent from './HOC'

class FormUsername extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>{this.props.name} Username</label><br/>
                <input type='text' onChange={this.props.change}/>
            </form>
        )
    }
}

export default UpdateComponent(FormUsername)