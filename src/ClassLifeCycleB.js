import React, { Component } from 'react'

export class ClassLifeCycleB extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           first:"ClassLifeCycle B constructor"
        }
        console.log(this.state.first);
      }
      static getDerivedStateFromProps(props,state){
          console.log('ClassLifeCycle B getDerivedStateFromProps');
          return null
      }
      componentDidMount(){
          console.log('ClassLifeCycle B componentDidMount');
      }
      render() {
          console.log('ClassLifeCycle B render');
          return (
              <div>ClassLifeCycle B</div>
          )
      }
}

export default ClassLifeCycleB