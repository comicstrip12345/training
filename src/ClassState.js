import React, { Component } from 'react'

export class ClassState extends Component {
    // constructor(){
    //     super()
    //     // this.state = "Hello" // String
    //     // this.state = ["Hello", "Goodbye"] // Array
    //     this.state = {count:0} // Object

        
    // }
    state = {count:0}
    subscribe(){
        this.setState({count:this.state.count -5})
    }
  render() {
    return (
      <div>
        {/* {this.state} */}
        {/* {this.state[1]} */}
        {this.state.count}
        <button onClick={()=>this.subscribe()}>Subscribe</button>
    </div>
    )
  }
}

export default ClassState