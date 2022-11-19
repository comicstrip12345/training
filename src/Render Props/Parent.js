import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName] = useState('')

    return (
        <Child 
        onSubmit={(e)=>{
            e.preventDefault()
            alert(`${name} is my name`)
        }} 
        onChange={(e)=>{
            setName(e.target.value)
        }}
        />
    )
}

export default Parent