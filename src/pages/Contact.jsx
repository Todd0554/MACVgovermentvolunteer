import React from 'react'

function Contact() {
  return (
  <div className="container-fluid py-5">
          <div className="container">
              <div className="row g-5">
                  <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
                      <div className="bg-light rounded h-100 p-5">
                          <div className="section-title">
                              <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                              <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                              <div className="text-start">
                                  <h5 className="mb-0">Our Office</h5>
                                  <span>1 Karobran Dr, Vermont South VIC 3133</span>
                              </div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                              <div className="text-start">
                                  <h5 className="mb-0">Email Us</h5>
                                  <span>macvproject1@gmail.com</span>
                              </div>
                          </div>
                          <div className="d-flex align-items-center">
                              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                              <div className="text-start">
                                  <h5 className="mb-0">Call Us</h5>
                                  <span>(03) 9803 2335</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                      <form action="https://formsubmit.co/toddy9229@outlook.com" method="POST" enctype="multipart/form-data" name="EmailForm">
                          <div className="row g-3">
                              <div className="col-12">

                                  <input type="text" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{height: "55px"}} name="Name" required/>
                              </div>
                              <div className="col-12">
                                  <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}} name="Email" required/>
                              </div>
                              <div className="col-12">
                                  <input type="text" className="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: "55px"}} name="Subject" required/>
                              </div>
                              <div className="col-12">
                                  <textarea className="form-control border-0 bg-light px-4 py-3" rows="5" placeholder="Message" name="Message" required></textarea>
                              </div>
                              <div className="col-12">
                                  <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
                    <iframe title="map" className="position-relative rounded w-100 h-100" width="600" height="450" loading="lazy" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ__9kAOI-1moRHSNd-xkjXns&key=AIzaSyBlAZbyVDzw5yx-pa6-5dWZbPyPtu0Q8c0" frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Contact