import React from 'react'

function Carousel() {
  return (
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpeg" alt="carousel-1"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h1 className="text-white text-uppercase mb-3 animated slideInDown">Who are we?</h1>
                            <h5 className="display-1 text-white mb-md-4 animated zoomIn">A partnership between four neighbourhood houses that aims to deliver a broad range of entry level training courses.</h5>
                            <a href="/about" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">About Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="carousel-2"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h1 className="text-white text-uppercase mb-3 animated slideInDown">Contact us for more</h1>
                            <h5 className="display-1 text-white mb-md-4 animated zoomIn" >Make community life rich and colorful</h5>

                            <a href="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel