import React, { Component } from 'react'
import FormName from './FormName'
import FormUsername from './FormUsername'

export class Parent extends Component {
    render() {
        return (
            <>
                <FormName/>
                <FormUsername/>
            </>
            
        )
    }
}

export default Parent