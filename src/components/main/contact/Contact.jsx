import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contact_container">
            <h2>Contact Me</h2>


            <div className="contact_blocks_container" id="contact_blocks_container_big">
                <div className="contact_block" id="linkedin">
                    <p>
                        Connect with me on linkedin!
                    </p>
                    <a href="https://rb.gy/lhbl3p"><img src= {process.env.PUBLIC_URL + '/linkedin.png'} alt="linkedin" className="contact_img" /></a>

                    <a href="https://rb.gy/lhbl3p"><p className="contact_link">LinkedIn</p></a>
                </div>

                <div className="contact_block" id="github">
                    <p>
                        Check out my projects on my personal github!
                    </p>
                
                    <a href="https://github.com/seanclmn"><img src= {process.env.PUBLIC_URL + '/github.png'} alt="linkedin" className="contact_img" /></a>

                    <a href="https://github.com/seanclmn"><p className="contact_link">Github</p></a>
                </div>
                
                <div className="contact_block" id="email">
                    <p>
                        Email me and stay in touch!
                    </p>
                    <a href="mailto:seanclmn1@gmail.com"><img src= {process.env.PUBLIC_URL + '/gmail.png'} alt="email" className="contact_img" /></a>
                    <a href="mailto:seanclmn1@gmail.com"><p className="contact_link">Email</p></a>
                </div>
            </div>


            <div className="contact_blocks_container" id="contact_blocks_container_small">
                <div className="contact_block_small" id="linkedin">
                    <a href="https://rb.gy/lhbl3p"><img src= {process.env.PUBLIC_URL + '/linkedin.png'} alt="linkedin" className="contact_img" /></a>
                    <a href="https://rb.gy/lhbl3p"><p className="contact_link">LinkedIn</p></a>
                </div>

                <div className="contact_block_small" id="github">
                    <a href="https://github.com/seanclmn"><img src= {process.env.PUBLIC_URL + '/github.png'} alt="github" className="contact_img" /></a>
                    <a href="https://github.com/seanclmn"><p className="contact_link">Github</p></a>
                </div>
                
                <div className="contact_block_small" id="email">
                    <a href="mailto:seanclmn1@gmail.com"><img src= {process.env.PUBLIC_URL + '/gmail.png'} alt="email" className="contact_img" /></a>
                    <a href="mailto:seanclmn1@gmail.com"><p className="contact_link">Email</p></a>
                </div>

            </div>

        </div>
    )
}

export default Contact
