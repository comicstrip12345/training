import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Info from './Info'
import Navbar from './Navbar'
import UserInfo from './UserInfo'
import Users from './Users'

const Parent = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='about' element={<About/>}/> */}
                <Route path='about' element={<About/>}>
                    <Route index element={<Contact/>}/>
                    <Route path='info' element={<Info/>}/>
                    <Route path='contact' element={<Contact/>}/>
                </Route>
                <Route path='users' element={<Users/>}>
                    <Route path=':userID' element={<UserInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Parent