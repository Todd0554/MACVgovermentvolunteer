import React from 'react'
import GalleryTes from '../component/GalleryTes'

function Course() {
  return (
    <div className="service-item wow zoomIn" data-wow-delay="0.9s">
        <GalleryTes/>
        <div className="pdf">
          
          <h2 className="coursetext">Our Courses List</h2>
          <br />
          <iframe className="coursepdf" title="coursepdf" src="/pdf/MACV Learn Local Courses - Semester 2 2023 (Learner Version).pdf" 
                  width="80%"
                  height="800">
          </iframe>
        </div>

    </div>
  )
}

export default Course