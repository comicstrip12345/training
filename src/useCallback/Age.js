import React,{memo} from 'react'

const Age = ({currentAge}) => {
    console.log('Age Rendering');

    return (
        <div>Age = {currentAge}</div>
    )
}

export default memo(Age)