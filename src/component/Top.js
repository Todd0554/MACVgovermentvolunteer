import React from 'react'

function Top() {
  return (
    <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <small className="py-2">Welcome to MACV!</small>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
                <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div className="me-6 pe-6 py-2">
                        <p className="m-0"><i className="fa fa-envelope-open me-2"></i>macvproject1@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top