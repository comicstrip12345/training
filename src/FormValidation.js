import React,{useState,useEffect} from 'react'

const FormValidation = () => {
    const [nameValid,setNameValid]= useState("")
    const [nameChange,setNameChange]= useState("")
    const [nameTrue,setNameTrue]= useState(false)
    const [addressValid,setAddressValid]= useState("")
    const [addressChange,setAddressChange]= useState("")
    const [addressTrue,setAddressTrue]= useState(false)
    const [locationValid,setLocationValid]= useState("")
    const [locationChange,setLocationChange]= useState("")
    const [locationTrue,setLocationTrue]= useState(false)

    const onNameChange = (e)=>{
        setNameChange(e.target.value)
    }
    const onAddressChange = (e)=>{
        setAddressChange(e.target.value)
    }
    const onLocationChange = (e)=>{
        setLocationChange(e.target.value)
    }
    console.log(nameChange);
    const onFormSubmit =(e)=>{
        e.preventDefault()
        if(!nameChange && !addressChange && !locationChange){
            setNameTrue(true)
            setNameValid("Enter Name")
            setLocationTrue(true)
            setLocationValid("Enter Location")
            setAddressTrue(true)
            setAddressValid("Enter Address")
            
        }
        else{
            setNameTrue(false)
            setLocationTrue(false)
            setAddressTrue(false)
        }
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <label>Stud ID</label>
            <input type="text"/><br/>
            <label>Stud Name</label>
            <input type="text" onChange={onNameChange}/>{nameTrue && <h4>{nameValid}</h4>}<br/>
            <label>Address</label>
            <input type="text" onChange={onAddressChange}/>{addressTrue && <h4>{addressValid}</h4>}<br/>
            <label>Location</label>
            <input type="text" onChange={onLocationChange}/>{locationTrue && <h4>{locationValid}</h4>}<br/>
            <label>PH Number</label>
            <input type="text"/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default FormValidation