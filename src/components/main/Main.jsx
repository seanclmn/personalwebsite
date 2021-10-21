import React from 'react'
import './Main.css'

import Museum from './portfolio/Museum'
import Towers from './portfolio/Towers'
import Footer from './portfolio/Football'
import Experience from './experience/Experience'
import Contact from './contact/Contact'
function Main() {
    return (
        <div className="container" id="home">
            <div className="intro">
                <h2>Hi, I'm</h2>
                <h1>Sean Coleman.</h1>
                <h3>I am a creative software engineer committed to good user experience and intuitive design.</h3>
                <br/>
                <h3>Scroll down to see my projects.</h3>
            </div>

            <div id='footer_container'>
                <Footer/>
            </div>

            <div id='museum_container'>
                <Museum/>
            </div>

            <div id='tower_container'>
                <Towers/>
            </div>

            <div id="experience_container">
                <Experience/>
            </div>

            <div id="contact">
                <Contact/>
            </div>
        </div>
    )
}

export default Main
