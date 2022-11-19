// Functional Component
// import React from 'react'

// const ClassChildComponent = ({greetHandler}) => {
//     return (
//         <div><button onClick={()=>greetHandler('your child')}>Greet Me</button></div>
//     )
// }

// export default ClassChildComponent


// Class Component 
import React, { Component } from 'react'

export class ClassChildComponent extends Component {
    
    render() {
        return (
            <div><button onClick={()=>this.props.greetHandler('your child')}>Greet Me</button></div>
        )
    }
}

export default ClassChildComponent