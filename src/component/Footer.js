import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../actions/userActions";

function Footer() {
  const dispatch = useDispatch();

    const userLogIn = useSelector((state) => state.userLogIn);
    const { userInfo } = userLogIn;

    const logOutHandler = (e) => {
        dispatch(logOut());
      };
    const user={
        facebook:"https://www.facebook.com/profile.php?id=61550684515765",
        linkedin: "https://www.linkedin.com/company/macv1/mycompany/?viewAsMember=true"
    }
  return (
        <div id="footer" className="container-fluid position-relative bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{bottom: "0"}}>
            <div className="container pt-5">
                <div className="row g-5 pt-4">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-light mb-2" href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                            <a className="text-light mb-2" href="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                            <a className="text-light" href="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                            {/* { userInfo ? (
                                <a className="text-light" onClick={logOutHandler} href="/"><i className="bi bi-arrow-right text-primary me-2"></i>Admin Logout</a>
                            ) : (
                            
                                <a className="text-light" href="/admin"><i className="bi bi-arrow-right text-primary me-2"></i>Admin Login</a>
                            )} */}
                            

                           
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Popular Links</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-light mb-2" href="/gallery"><i className="bi bi-arrow-right text-primary me-2"></i>Gallery</a>
                            <a className="text-light mb-2" href="/newsevents"><i className="bi bi-arrow-right text-primary me-2"></i>News and Events</a>
                            <a className="text-light mb-2" href="/course"><i className="bi bi-arrow-right text-primary me-2"></i>Our Courses</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        {/* <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>1 Karobran Dr, Vermont South VIC 3133</p> */}
                        <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>macvproject1@gmail.com</p>
                        {/* <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>(03) 9803 2335</p> */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Follow Us</h3>
                        <div className="d-flex">
                            {/* <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a> */}
                            <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href={user.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f fw-normal"></i></a>
                            <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href={user.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in fw-normal"></i></a>
                            {/* <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer