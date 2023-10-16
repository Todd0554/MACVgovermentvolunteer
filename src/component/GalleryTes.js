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
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Courses</h5>
                        <h1 className="display-5 mb-0">We provide variety of courses for everyone!</h1>
                    </div>
                    <div className="row g-5">
                    <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Hospitality.jpg" alt="Hospitality" style={{ height: '70%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Introduction to Hospitality. Learn the basics of working in the hospitality industry including barista skills training</h5>
                            </div>
                        </div>
                        
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Aged care.jpg" alt="Aged" style={{width: '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Pathways to work in the Aged Care sector. Find out more about the aged care sector, its requirements and current employment opportunities</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-7">
                    <div className="row g-5">
                    <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Digital learning.jpg" alt="learning" style={{width: '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">A wide range of digital skills courses are provided and include an introduction to Cloud Based Programs, Microsoft Office, Accounting, Trello for Event Management to name a few.</h5>
                            </div>
                        </div>
                    
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/Early childhoood learning.jpg" alt="childhoood" style={{width: '100%'}}/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Pathways to work in the Early Childhood Education sector. Find out more about the aged care sector, its requirements and current employment opportunities </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Join Us</h3>
                        <p className="text-white mb-3">Are you a business or job provider and have learners who need to improve their skills, knowledge and confidence in a supportive environment? Now you can  refer them to your closest neighbourhood house.</p>
                        <a href="/contact" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryTes