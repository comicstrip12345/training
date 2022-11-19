import React from 'react'
import useCounter from './Hooks/useCounter'
import useDocTitle from './Hooks/useDocTitle'

const CounterOne = () => {
    const [count,onClick] = useCounter(0)
    useDocTitle(count)
    
    return (
        <button onClick={onClick}>
            Click {count} times
        </button>
    )
}

export default CounterOne