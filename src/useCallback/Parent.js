import React,{useState,useCallback,memo} from 'react'
import Age from './Age'
import ButtonAge from './ButtonAge'
import ButtonSalary from './ButtonSalary'
import Salary from './Salary'
import Title from './Title'

const Parent = () => {
    const [age,setAge]=useState(10)
    const [salary,setSalary]=useState(10)
    console.log("index rendering");

    const addAge = useCallback((e)=>{
        e.preventDefault()
        setAge(age + 10)
        console.log('Age Rendering');
    },[age])

    const addSalary = useCallback((e)=>{
        e.preventDefault()
        setSalary(salary + 10)
        console.log('Salary Rendering');
    },[salary])
    return (
        <div>
            <Title/>
            <Age currentAge={age}/>
            <ButtonAge addAge={addAge}/>
            <Salary currentSalary={salary}/>
            <ButtonSalary addSalary={addSalary}/>
            {/* <div>Age = {age}</div>
            <button onClick={addAge}>Add Age</button>
            <div>Salary - {salary}</div>
            <button onClick={addSalary}>Add Salary</button> */}
        </div>
    )
}

export default  memo(Parent)