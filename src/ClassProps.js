import React, { Component } from 'react'

export class ClassProps extends Component {
  
  render() {
    const {name,altName} = this.props
    return (
      <div>{name} {altName}</div>
    )
  }
}

export default ClassProps