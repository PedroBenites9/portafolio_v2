import React from 'react'
import { Link, Route, Routes, } from 'react-router-dom'
import HomeScreen from '../screen/homeScreen/HomeScreen'
import ProjectScreen from '../screen/projectScreen/ProjectScreen'
import AboutMe from '../screen/aboutMe/AboutMe'
import ContactScreen from '../screen/contactScreen/ContactScreen'



const RoutesMain = () => {



    return (
        <   >
            <div className='container d-flex column-gap-3'>

                <Link to="/" className='text-decoration-none'>Home</Link>
                <Link to="/contact" className='text-decoration-none'>contact</Link>
                <Link to="/aboutme" className='text-decoration-none'>About Me</Link>
                <Link to="/portafolio" className='text-decoration-none'>Portafolio</Link>
            </div>
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
        </  >
    );
}

export default RoutesMain
