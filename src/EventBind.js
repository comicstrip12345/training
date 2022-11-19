import React, { Component } from 'react'

export class EventBind extends Component {
    // constructor(props) {
    //   super(props)
    
    //   this.clickMessage = this.clickMessage.bind(this) // 3rd Approach 
    // }
    state = {message:"hello"}
    clickMessage =()=>{
        this.setState({message:"goodbye"})
    }
  render() {
    return (
        <>
            {this.state.message}
            {/* <button onClick={this.clickMessage.bind(this)}>Click</button> First Approach */}
            {/* <button onClick={()=>this.clickMessage()}>Click</button> 2nd Approach */}
            <button onClick={this.clickMessage}>Click</button> {/*4th Approach*/}
        </>
      
    )
  }
}

export default EventBind