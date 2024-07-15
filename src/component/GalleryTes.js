import React from 'react'

function GalleryTes() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5 mb-5">
                <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minHeight: "400px"}}>
                    <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" alt="carousel2" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title mb-5">
                        <h5 className="position-relative text-primary text-uppercase">Courses</h5>
                        <h1 className="display-5 mb-0">We provide a variety of different courses</h1>
                        <h5>For more information about each course, please refer to the Course Guide below. If you are interested in a course, please contact the relevant neighbourhood house.</h5>
                    </div>
                    <div className="row g-5">
                    <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Early childhoood learning.jpg" alt="childhoood" style={{"width": '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom p-4">
                                <h5 className="m-0">Some of our 'taster' industry course include:</h5>
                                &nbsp;&nbsp;&nbsp;•	Introduction to Hospitality
                                <br></br>  &nbsp;&nbsp;&nbsp;•	Introduction to Customer Service
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Digital learning.jpg" alt="learning" style={{"width": '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom p-4">
                                <h5 className="m-0">Some of our digital courses include:</h5>
                                &nbsp;&nbsp;&nbsp;•	Digital Essentials
                                <br></br>  &nbsp;&nbsp;&nbsp;•	Introduction to Microsoft Word and Excel
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-7">
                    <div className="row g-5">
                    <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Aged care.jpg" alt="Aged" style={{"width": '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom p-4">
                                <h5 className="m-0">Some of our employability skills courses include:</h5>
                                &nbsp;&nbsp;&nbsp;•	Bounce Back! An introduction to Resilience Strategies
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/language.jpg" alt="Hospitality" style={{"width": '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom p-4">
                                <h5 className="m-0">Some of our language courses include:</h5>
                                &nbsp;&nbsp;&nbsp;•	Auslan for Work and Study
                                <br></br>  &nbsp;&nbsp;&nbsp;•	English for Migrants
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Choose your course now!</h3>
                        <a href="/contact" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryTes