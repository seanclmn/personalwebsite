import React from 'react'
import './portfolio.css'
function Museum() {
    return (
        <div className="project_container">
            <div className="text">
                <h3>The Art Archives</h3>
                <p>A web app for exploring museums online. Collections as well as general search pages can be used to view art.</p>
                
                <p>Technologies: React js, html, css</p>
            </div>
                    
            <div className="image" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/museum_screenshot.png'})`}}
                >
                <div className="modal">
                    <a href="http://seanclmn-museum-app.herokuapp.com/">
                        <button>
                            Website
                        </button>
                    </a>

                    <a href="https://github.com/seanclmn/Museum">
                        <button>
                            Github
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Museum
