import React from 'react'

function NewsEvents() {
  return (
    <div className="container-fluid bg-primary bg-testimonial fadeInUp"  style={{"paddingTop": "40px", "height":"720px"}} data-wow-delay="0.1s">
            <div className="nae" style={{"padding":"20px 18%", "marginBottom":"20px"}}>
                <h2 className="text-white mb-2">News & Events</h2>
                <h3 className="text-white mb-2">MACV Business Networking Lunch</h3>
                <h5 className="text-white mb-2">MACV have partnered with Whitehorse Business Group to host a Business Network Lunch on Thursday 20th June at 1:00pm at Vermont South Neighbourhood House. Businesses are encouraged to attend and learn more about the courses and services MACV offer to upskill existing and new staff.</h5>
                <br />
                <h3 className="text-white mb-2">To book your place, click on the link:</h3>
                <a href="https://www.trybooking.com/events/landing/1212114" target="_blank" className="btn btn-secondary1 py-md-3 px-md-5 animated slideInRight">Book</a>
                
                {/* <h5 className="text-white mb-2">Next Event: Business Networking Lunch</h5> */}
                {/* <h5 className="text-white mb-2">Time: Thursday 12th October from 12:30-14:00pm</h5>
                <h5 className="text-white mb-2">Location: Vermont South Neighbourhood House</h5> */}
            </div>
    </div>
  )
};

export default NewsEvents