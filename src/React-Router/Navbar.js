import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const styles = (props)=>{
        return{
            textDecoration: props.isActive ? 'none' : 'underline'
        }
    }
    return (
        <nav>
            <NavLink to='/' style={styles}>Home</NavLink>
            <NavLink to='about' style={styles}>About</NavLink>
            <NavLink to='users' style={styles}>Users</NavLink>
        </nav>
    )
}

export default Navbar