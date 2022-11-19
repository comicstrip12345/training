import React, { Component } from 'react'
import ClassChildComponent from './ClassChildComponent'


export class ClassParentComponent extends Component {
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

export default ClassParentComponent