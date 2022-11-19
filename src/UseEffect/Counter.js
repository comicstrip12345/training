import React,{useState,useEffect} from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0)
    const [name,setName] = useState(0)
    useEffect(()=>{
        document.title = `Click ${counter} times`
        console.log('Document Updating');
    },[counter])
    const onClick=(e)=>{
        e.preventDefault()
        setCounter(counter + 1)
    }
    return (
        <div>
            <button onClick={onClick}>Clicked {counter} times</button>
            <input onChange={(e)=> setName(e.target.value)} type='text'/>
        </div>
    )
}

export default Counter