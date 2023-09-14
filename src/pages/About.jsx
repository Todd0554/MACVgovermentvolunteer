import React from 'react'

function About() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title mb-4">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                        <h1 className="display-5 mb-0">MACV Alliance</h1>
                    </div>
                    <h4 className="text-body fst-italic mb-4">Mitcham Neighbourhood House, Avenue Neighbourhood House at Eley, Clota Cottage Neighbourhood House and Vermont South Neighbourhood House formed the MACV Alliance in 2018 to focus on strategic partnership building with the Whitehorse business community, community organisations, tertiary education providers, employment agencies and local industry. </h4>
                    <p className="mb-4">The alliance has successfully developed and delivers a range of quality pre-accredited training courses, (Learn Local courses). These courses focus on a wide range of topics including: 
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Digital literacy 
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Language, literacy and numeracy skills
                    <br></br>  &nbsp;&nbsp;&nbsp;•	English language skills 
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Employability skills 
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Industry specific ‘taster’ training courses covering  a wide range of sectors.  This includes hospitality, community services, customer service, aged care, early childhood education, trades and more.
                    <br></br>
                    <br></br>Learn Local courses are short courses that are government subsidised and offered  free or very low cost to eligible* adult Victorians. The courses are also flexible and can be tailored specifically to meet learner needs. Training can be undertaken both face-to-face, online or via a hybrid model.
                    </p>
                    <div className="row g-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Flexible</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Short term</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Face to face</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Online</h5>
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-5" style={{minHeight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/about.jpg" alt="about" style={{objectFit: "cover"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About