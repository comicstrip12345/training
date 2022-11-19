import React from 'react'
import useDocTitle from './Hooks/useDocTitle'
import useCounter from './Hooks/useCounter'

const CounterTwo = () => {
    const [count,onClick] = useCounter(0)
    useDocTitle(count)
    return (
        <button onClick={onClick}>
            Click {count} times
        </button>
    )
}

export default CounterTwo