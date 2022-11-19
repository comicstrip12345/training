import React from 'react'

const Child = ({onChange, onSubmit}) => {
    return (
        <form onSubmit={onSubmit}>
            <label>Name</label><br/>
            <input type='text' onChange={onChange}/>
        </form>
    )
}

export default Child