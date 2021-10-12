import React from 'react'
import './portfolio.css'
function Towers() {
    return (
        <div id="portfolio_container">


            <div className="project_container">
                    <div className="text">
                        <h3>Tower of Hanoi</h3>
                        <p>A web app to play Tower of Hanoi, a mathematical puzzle invented by French mathematician Édouard Lucas in 1883.</p>

                        <p>Technologies: Javascript, html, css</p>
                    </div>

                        <div className="image"
                        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/towers_screenshot.png'})`}}
                        >
                            <div className="modal">
                                <a href="https://seanclmn.github.io/hanoi/home.html">
                                    <button>
                                        Website
                                    </button>
                                </a>

                                <a href="https://github.com/seanclmn/hanoi">
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

export default Towers
