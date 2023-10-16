import React from 'react'
import GalleryTes from '../component/GalleryTes'

function Course() {
  return (
    <div className="service-item wow zoomIn" data-wow-delay="0.9s">
        <GalleryTes/>
        <div className="pdf" style={{"margin":"0 auto"}}>

          <h1 className="text-white">To receive the subsidised cost for a Learn Local course, the prospective learner must be:</h1>
          <h5 className="text-white">&nbsp;&nbsp;&nbsp;1. An Australian or New Zealand citizen or</h5>	
          <h5 className="text-white">&nbsp;&nbsp;&nbsp;2. Holder of an Australian permanent visa or</h5>	
          <h5 className="text-white">&nbsp;&nbsp;&nbsp;3. An asylum seeker holding a valid visa</h5>	
          <h5 className="text-white">&nbsp;&nbsp;&nbsp;4. 17 years of age and over and not enrolled in school or with an exemption from school </h5>	
          <h5 className="text-white">&nbsp;&nbsp;&nbsp;5. Courses are also available for a full fee if the prospective learner does not meet the criteria listed.</h5>

        </div>
        <div style={{"textAlign": "center"}}>
          <br />
          <h2 className="coursetext">For information about each course, please review the Course Guide:</h2>
          <br />
          <iframe className="coursepdf" title="coursepdf" src="pdf/MACV Learn Local Courses - Semester 2 2023 (Learner Version).pdf" 
                  width="80%"
                  height="800">
          </iframe>
        </div>

    </div>
  )
}

export default Course