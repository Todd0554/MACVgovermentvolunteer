import React from 'react'

function Course() {
  return (
    <div className="service-item wow zoomIn" data-wow-delay="0.9s">
        <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
            <h3 className="text-white mb-3">Our Courses</h3>
            <p className="text-white mb-3">Coming soon...</p>
            <h2 className="text-white mb-0">For more please contact us directly.</h2>
            <br />
            <a href="/contact" classNameName="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Book Now</a>
        </div>
    </div>
  )
}

export default Course