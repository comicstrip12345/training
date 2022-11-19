import React, { Component } from 'react'
import ClassLifeCycleB from './ClassLifeCycleB';

export class ClassLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:"ClassLifeCycle A constructor"
      }
      console.log(this.state.first);
    }
    static getDerivedStateFromProps(props,state){
        console.log('ClassLifeCycle A getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('ClassLifeCycle A componentDidMount');
    }
    render() {
        console.log('ClassLifeCycle A render');
        return (
            <div>ClassLifeCycle A <ClassLifeCycleB/></div>
        )
    }
}

export default ClassLifeCycle