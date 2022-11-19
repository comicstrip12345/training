import React,{memo} from 'react'

const ButtonSalary = ({addSalary}) => {
    console.log('Button Salary Rendering');

    return (
        <button onClick={addSalary}>Add Salary</button>
    )
}

export default memo(ButtonSalary)