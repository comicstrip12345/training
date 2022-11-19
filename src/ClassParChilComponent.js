import React, { Component } from 'react'

export class ClassParChilComponent extends Component {
    state={greetings:"Goodmorning"}
    greetParent=(child)=>{
        alert(`Hello ${this.state.greetings} from ${child}`)
    }
  render() {
    return (
      <div>
        <ClassChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export class ClassChildComponent extends Component {
    
    render() {
        return (
            <div><button onClick={()=>this.props.greetHandler('your child')}>Greet Me</button></div>
        )
    }
}

export default ClassParChilComponent