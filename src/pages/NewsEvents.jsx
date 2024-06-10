import React from 'react'

function NewsEvents() {
  return (
    <div id="newsEvent" className="container-fluid bg-primary bg-testimonial fadeInUp"  style={{"paddingTop": "40px"}} data-wow-delay="0.1s">
            <div className="nae" style={{"padding":"20px 18%", "marginBottom":"20px"}}>
                <h2 className="text-white mb-2">News & Events</h2>
                <h3 className="text-white mb-2">MACV Business Networking Lunch</h3>
                <h5 className="text-white mb-2">MACV have partnered with Whitehorse Business Group to host a Business Network Lunch on Thursday 20th June at 1:00pm at Vermont South Neighbourhood House. Businesses are encouraged to attend and learn more about the courses and services MACV offer to upskill existing and new staff.</h5>
                <br />
                <h3 className="text-white mb-2">To book your place, click on the link:</h3>
                <a href="https://www.trybooking.com/events/landing/1212114" target="_blank" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Book</a>
            </div>
            <div className="nae" style={{"padding":"20px 18%", "marginBottom":"20px"}}>
                <h3 className="text-white mb-2">Introduction to Hospitality Course</h3>
                <h5 className="text-white mb-2">MACV have partnered with The Chen Hotel and Box Hill Institute -  Skills and Jobs Centre to provide an Introduction to Hospitality, starting in Term 3 (Tuesday 30th July). If you are interested in starting a career in Hospitality, please contact Vermont South Neighbourhood House at info@vsnh.org.au or click the button below.</h5>
                <br />
                <a href="mailto:info@vsnh.org.au" target="_blank" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Book</a>
            </div>
    </div>
  )
};

export default NewsEvents