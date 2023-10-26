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
                    <h4 className="text-body fst-italic mb-4">The MACV Alliance is a partnership of four Neighbourhood Houses within the City of Whitehorse:
                        <br></br>  &nbsp;&nbsp;&nbsp;-	Vermont South Neighbourhood House
                        <br></br>  &nbsp;&nbsp;&nbsp;-	Mitcham Community House 
                        <br></br>  &nbsp;&nbsp;&nbsp;-	Avenue Neighbourhood House @ Eley
                        <br></br>  &nbsp;&nbsp;&nbsp;-	Clota Cottage Neighbourhood House
                        
                    </h4>
                    <p className="mb-4">The Alliance was formed in 2018 to focus on strategic partnership building with the Whitehorse business community, community organisations, tertiary education providers, employment agencies and local industry. The MACV Alliance brings together a considerable collection of resources and knowledge in the training and employment space.
                    <br></br>
                    <br></br>
                    The Alliance has successfully developed and delivers a broad range of pre-accredited training courses (called Learn Local courses). The courses are short, government subsidised and offered free or at very low cost to eligible* adult Victorians in need of improved employability skills. The courses are also flexible and can be tailored individually to meet learner needs. Training can be undertaken both face to face, online or via a hybrid model.
                    <br></br>
                    <br></br>
                    Our courses focus on:
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Literacy and numeracy skills
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Language skills
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Digital skills 
                    <br></br>  &nbsp;&nbsp;&nbsp;•	Employability skills 
                    <br></br>  Industry specific ‘taster’ training courses covering  a wide range of sectors.  This includes hospitality, community services, customer service, aged care, early childhood education, trades and more.
                    <br></br>
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