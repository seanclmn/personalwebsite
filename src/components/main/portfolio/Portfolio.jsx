import React from 'react'
import './Portfolio.css'

function Portfolio(props) {

    const title = props.title
    const summary = props.summary
    const technologies = props.technologies
    const image = props.image
    const website = props.link
    const github = props.github

    return (
        <div id="portfolio_container">
            <div className="project_container">
                <div className="text">
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <p>{technologies}</p>
                </div>

                <div className="image"
                    style={{backgroundImage: image}}
                    >
                    <div className="modal">
                        <a href={website}>
                            <button>
                                Website
                            </button>
                        </a>

                        <a href={github}>
                            <button>
                                Github
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
