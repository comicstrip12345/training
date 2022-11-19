import React, { Component } from 'react'

export class ClassForms extends Component {
    state = {type:""}
    onChange=(e)=>{
        this.setState({type:e.target.value})
    }
  render() {
    return (
      <form>
        <label>Username</label>
        <input type="text" onChange={this.onChange}/>
        <p>{this.state.type}</p>
      </form>
    )
  }
}

export default ClassForms