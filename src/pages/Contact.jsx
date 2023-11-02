import React from 'react'
import Maps from '../component/Maps'

function Contact() {
  return (
    <div>
        <h2 className="position-relative text-primary text-uppercase" style={{"textAlign": "center", "paddingTop":"40px"}}>Contact Us</h2>

        <div className="container-fluid py-5" style={{"width": "500px"}}>
          <div className="container">
              <div className="row g-5">
                  <div className="col-xl-12 col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                      <form action="https://formsubmit.co/6a069c42b3ad460f0c6a1e112a9c2b30" method="POST" enctype="multipart/form-data" name="EmailForm">
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
              </div>
          </div>
    </div>
    <h2 className="coursetext" style={{"textAlign": "center"}}>MACV Houses Details</h2>

        <Maps />
    </div>
  
  )
}

export default Contact