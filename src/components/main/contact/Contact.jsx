import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact_container">
            <h2>Contact Me</h2>


            <div className="contact_blocks_container">
                <div className="contact_block" id="linkedin">
                    <p>
                        Connect with me on linkedin!
                    </p>
                    <img src= {process.env.PUBLIC_URL + '/linkedin.png'} alt="linkedin" className="contact_img" />

                    <a href="https://rb.gy/lhbl3p"><p className="contact_link">LinkedIn</p></a>
                </div>

                <div className="contact_block" id="github">
                    <p>
                        Check out my projects on my personal github!
                    </p>
                
                    <img src= {process.env.PUBLIC_URL + '/github.png'} alt="linkedin" className="contact_img" />

                    <a href="https://github.com/seanclmn"><p className="contact_link">Github</p></a>
                </div>
                
                <div className="contact_block" id="email">
                    <p>
                        Email me and stay in touch!
                    </p>
                    <img src= {process.env.PUBLIC_URL + '/gmail.png'} alt="linkedin" className="contact_img" />

                <a href="secolema@iu.edu"><p className="contact_link">Email</p></a>
                </div>
            </div>

        </div>
    )
}

export default Contact
