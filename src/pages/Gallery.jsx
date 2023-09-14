import React from 'react'

function Gallery() {
  return (
    <div>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          
          <div className="container">
              <div className="section-title mb-4" style={{paddingBottom: "60px"}}>
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Gallery</h5>
                <h1 className="display-5 mb-0">We provide different activities for everyone!</h1>
              </div>
              <div className="row g-5">
                  <div className="col-lg-5" style={{minHeight: "200px"}}>
                      <div className="position-relative h-100">
                          <img className="position-absolute w-100 h-100 rounded wow zoomIn" alt="Hospitality" data-wow-delay="0.9s" src="img/Hospitality.jpg" style={{objectFit: "cover"}} />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="section-title mb-4">
                          <h5 className="display-5 mb-0">Introduction to Hospitality</h5>
                      </div>
                      <p className="mb-4">Learn the basics of working in the hospitality industry including barista skills training.
                      </p>
                  </div>

              </div>
          </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-5" style={{minHeight: "200px"}}>
                      <div className="position-relative h-100">
                          <img className="position-absolute w-100 h-100 rounded wow zoomIn" alt="Aged" data-wow-delay="0.9s" src="img/Aged care.jpg" style={{objectFit: "cover"}} />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="section-title mb-4">
                          <h5 className="display-5 mb-0">Pathways to work in the Aged Care sector</h5>
                      </div>
                      <p className="mb-4">Find out more about the aged care sector, its requirements and current employment opportunities.
                      </p>
                  </div>

              </div>
          </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-5" style={{minHeight: "200px"}}>
                      <div className="position-relative h-100">
                          <img className="position-absolute w-100 h-100 rounded wow zoomIn" alt="Digital" data-wow-delay="0.9s" src="img/Digital learning.jpg" style={{objectFit: "cover"}} />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="section-title mb-4">
                          <h5 className="display-5 mb-0">Wide range of digital skills courses</h5>
                      </div>
                      <p className="mb-4">A wide range of digital skills courses are provided and include an introduction to Cloud Based Programs, Microsoft Office, Accounting, Trello for Event Management to name a few.
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-5" style={{minHeight: "200px"}}>
                      <div className="position-relative h-100">
                          <img className="position-absolute w-100 h-100 rounded wow zoomIn" alt="childhoood" data-wow-delay="0.9s" src="img/Early childhoood learning.jpg" style={{objectFit: "cover"}} />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="section-title mb-4">
                          <h5 className="display-5 mb-0">Early Childhood Education</h5>
                      </div>
                      <p className="mb-4">Pathways to work in the Early Childhood Education sector. Find out more about the aged care sector, its requirements and current employment opportunities.
                      </p>
                  </div>

              </div>
          </div>
      </div>
    </div>
  )
}

export default Gallery