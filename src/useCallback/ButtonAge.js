import React,{memo} from 'react'

const ButtonAge = ({addAge}) => {
    console.log('Button Age Rendering');

    return (
        <button onClick={addAge}>Add Age</button>
    )
}

export default memo(ButtonAge) 