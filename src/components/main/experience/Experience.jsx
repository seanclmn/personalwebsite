import React from 'react'

import './Experience.css'

function Experience(){
  return(
    <div id="experience">
      <h2>My Experience</h2>
      <div>
        <ul>
          <li>Indiana University Neutron Spin Rotation (Feb 2019 - Aug 2019, July 2020-July 2021)</li>
          <p>Using LabWindows/CVI, I built a clean and intuitive user interface capable of controlling every
            functionality of the LM500 cryogen level monitor. I also helped build a magnetic field mapper that measures the magnetic field around the experiment
            setup. I used python serial communication to give the motors in the magnetic field mapper
            directions to move around the neutron beam assembly.</p>
          <li>General Assembly (July 2021 - Oct 2021)</li>
          <p>Completed a 3 month full-stack web development immersive, completing 3 personal projects using the MERN Stack. 
            I learned and worked together with students everyday. Technologies include React js, Node js, Express, Mongo, SQL, and Django.
          </p>
        </ul>

      </div>

      <div></div>
    </div>
  )

}

export default Experience
