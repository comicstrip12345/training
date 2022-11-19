import React, { Component } from 'react'

export class ClassNameList extends Component {
    // constructor(props) {
    //   super(props)
    
    
    // }
    state = [1,2,3,4,5,6]
    render() {
        return (
            <>
                {this.state.map((item)=>(
                    <p>{item}</p>
                ))}
            </>
        )
    }
}

export default ClassNameList