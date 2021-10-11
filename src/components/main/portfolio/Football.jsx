import React from 'react'
import './portfolio.css'

function Football() {
    return (
        <div className="project_container">
            <div className="text">
                <h3>Footer</h3>
                <p>A web app for exploring the top football clubs in the world. Make your own account to follow your favorite teams.</p>
                
                <p>Technologies: React js, Node js, Express, MongoDb, Auth0</p>
            </div>
                    
            <div className="image" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/footer_screenshot.png'})`}}
                >
                <div className="modal">
                    <a href="https://footerfront.herokuapp.com/">
                        <button>
                            Website
                        </button>
                    </a>

                    <a href="https://github.com/seanclmn/footer_front">
                        <button>
                            Github
                        </button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Football
