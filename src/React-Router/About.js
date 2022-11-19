import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
  const styles = (props)=>{
      return{
          textDecoration: props.isActive ? 'none' : 'underline'
      }
  }
  return (
    <nav>
        <NavLink to='info' style={styles}>Info</NavLink>
        <NavLink to='contact' style={styles}>Contact</NavLink>
        <Outlet/>
    </nav>
  )
}

export default About