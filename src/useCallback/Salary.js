import React,{memo} from 'react'

const Salary = ({currentSalary}) => {
    console.log('Salary Rendering');

    return (
        <div>Salary - {currentSalary}</div>
    )
}

export default memo(Salary)