import React from 'react'
import './Main.css'

import Portfolio from './portfolio/Portfolio'
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

            <div id='footer_container' className="project">
                <Portfolio 
                    title={"Footer"}
                    summary={"A web app for exploring the top football clubs in the world. Make your own account to follow your favorite teams."}
                    technologies={"Technologies: React js, Node js, Express, MongoDb, Auth0"}
                    image={`url(${process.env.PUBLIC_URL + '/footer_screenshot.png'})`}
                    website={"https://footerfront.herokuapp.com/"}
                    github={"https://github.com/seanclmn/footer_front"}
                />
            </div>

            <div id='museum_container' className="project">
                <Portfolio
                    title={"The Art Archives"}
                    summary={"A web app for exploring museums online. Collections as well as general search pages can be used to view art."}
                    technologies={"Technologies: React js, html, css"}
                    image={`url(${process.env.PUBLIC_URL + '/museum_screenshot.png'})`}
                    website={"http://seanclmn-museum-app.herokuapp.com/"}
                    github={"https://github.com/seanclmn/Museum"}
                />
            </div>

            <div id='tower_container' className="project">
                <Portfolio
                    title={"Tower of Hanoi"}
                    summary={"A web app to play Tower of Hanoi, a mathematical puzzle invented by French mathematician Édouard Lucas in 1883."}
                    technologies={"Technologies: Javascript, html, css"}
                    image={`url(${process.env.PUBLIC_URL + '/towers_screenshot.png'})`}
                    website={"https://seanclmn.github.io/hanoi/home.html"}
                    github={"https://github.com/seanclmn/hanoi"}
                />
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
