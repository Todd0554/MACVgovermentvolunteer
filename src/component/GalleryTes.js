import React from 'react'

function GalleryTes() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5 mb-5">
                <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minHeight: "400px"}}>
                    <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title mb-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Gallery</h5>
                        <h1 className="display-5 mb-0">We provide different activities for everyone!</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">blaaaaaa</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">blaaaaa</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-7">
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">blaaaaaaa</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">blaaaaaaaa</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Join Us</h3>
                        <p className="text-white mb-3">Are you a business or job provider and have learners who need to improve their skills, knowledge and confidence in a supportive environment? Now you can  refer them to your closest neighbourhood house.</p>
                        <h2 className="text-white mb-0">Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GalleryTes