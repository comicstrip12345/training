import React, { Component } from 'react'

export class ClassEventHandler extends Component {
    display=()=>{
        console.log("Clicked");
    }
  render() {
    return (
        <div>
            <button onClick={this.display}>Click</button>
        </div>
    )
  }
}

export default ClassEventHandler