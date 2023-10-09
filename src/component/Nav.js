
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
         <object data="img/logof.png" width="250px"> </object>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/course" className="nav-item nav-link">Course</a>
                <a href="/newsevents" className="nav-item nav-link">News & Events</a>
                <a href="/partnerships" className="nav-item nav-link">Partnerships</a>
                {/* <a href="/joinus" className="nav-item nav-link">Join Us</a> */}
                <a href="/contact" className="nav-item nav-link">Contact</a>
                <a href="/gallery" className="nav-item nav-link">Gallery</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav