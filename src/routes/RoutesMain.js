import React from 'react'
import { Link, Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import HomeScreen from '../screen/homeScreen/HomeScreen'
import ProjectScreen from '../screen/projectScreen/ProjectScreen'
import AboutMe from '../screen/aboutMe/AboutMe'
import ContactScreen from '../screen/contactScreen/ContactScreen'



const RoutesMain = () => {



    return (
        <div className='container'>
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/portafolio">Portafolio</Link>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
            </Routes>
            <Routes>
                <Route path='/contact' element={<ContactScreen />} />
            </Routes>
            <Routes>
                <Route path='/aboutme' element={<AboutMe />} />
            </Routes>
            <Routes>
                <Route path='/portafolio' element={<ProjectScreen />} />
            </Routes>
        </div>
    );
}

export default RoutesMain
