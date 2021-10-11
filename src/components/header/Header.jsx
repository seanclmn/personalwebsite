import React from 'react'
import './Header.css'
import Resume from "./resume.pdf"
function Header() {
    return (
        <div className="header">
            <div >
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className="logo"/>
            </div>
            <nav className="nav">
                <a href="#museum_container" >
                    <ul className="link" >Projects</ul>
                </a>


                <a href="#experience">
                  <ul className="link">Experience</ul>
                </a >

                <a href = {Resume} target = "_blank">
                  <ul className="link">Resume</ul>
                </a>

                <a href="#contact">
                    <ul className="link">Contact me</ul>
                </a>
                
            </nav>

        </div>

    )
}

export default Header
