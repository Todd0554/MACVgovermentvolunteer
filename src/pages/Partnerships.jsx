import React from 'react'

function Partnerships() {
  return (
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <div className="row g-5">
        <div className="col-lg-5" style={{minHeight: "500px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/partner.jpg" alt="about" style={{objectFit: "cover"}} />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="section-title mb-4">
                    <h5 className="position-relative d-inline-block text-primary text-uppercase">Partnership</h5>
                </div>
                <div className="row" >
                  <h1>MACV have proudly partnered with:</h1>
                  <div className="col-md-6" style={{"height": "100px", "margin":"auto", "display":"flex", "justifyContent": "center","textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
                    <a href="https://www.vic.gov.au/" target="_blank" rel="noreferrer"><img src="img/Victoria-State-Government[46].svg" alt="partner1" style={{"height": "100%"}}/></a>
                  </div>
                  <div className="col-md-6"  style={{"height": "100px", "margin":"auto", "textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
                    <a href="https://all.accor.com/hotel/B3V1/index.en.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps" target="_blank" rel="noreferrer"><img src="img/The Chen Logo.jpg" alt="partner2" style={{"height": "100%"}}/></a>
                  </div>
                  <div className="col-md-6" style={{"height": "100px", "margin":"auto", "display":"flex", "justifyContent": "center","textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
                    <a href="https://www.boxhill.edu.au/skills-and-jobs-centres/" target="_blank" rel="noreferrer"><img src="img/SAJC_BHI_CoBrand (1).png" alt="partner3" style={{"height": "100%"}}/></a>
                  </div>
                </div>
                <p className="text-body fst-italic mb-4">The MACV Alliance collaborates with industry, businesses and job providers to create relevant and engaging learning experiences, which connect learners with industry employers. 
                </p>
                <p className="text-body fst-italic mb-4">If you are a local business interested in upskilling current and new staff through Learn Local courses, please contact a MACV Neighbourhood House.</p>
                <a id="contactPartner" href="/contact" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Contact</a>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Partnerships