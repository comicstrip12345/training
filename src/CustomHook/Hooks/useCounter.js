import {useState} from 'react'

const useCounter = (initialValue) => {
    const [counter,setCounter] = useState(initialValue)
    const onClick = (e)=>{
        e.preventDefault()
        setCounter(counter + 1)
    }
    // const eventHandler={
    //     onClick: e=>{
    //         e.preventDefault()
    //         setCounter(counter + 1)
    //     }
    // }
    return [counter, onClick]
}

export default useCounter