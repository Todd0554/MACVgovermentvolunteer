
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
         <object data="img/Victoria-State-Government.svg" width="70" height="70"> </object>
         <object data="img/ll-logo (1).svg" style={{marginLeft: "8px"}} width="70" height="70"> </object>
         <object data="img/MACV Bigger Logo.svg" style={{marginLeft: "5px"}} width="45" height="45"> </object>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/gallery" className="nav-item nav-link">Gallery</a>
                
                <div className="nav-item dropdown">
                    <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Course</a>
                    <div className="dropdown-menu m-0">
                        <a href="/" className="dropdown-item">Coming soon...</a>
                        {/* <a href="/" className="dropdown-item">Course List</a>
                        <a href="/" className="dropdown-item">Book Online</a> */}
                    </div>
                </div>
                <a href="/newsevents" className="nav-item nav-link">News & Events</a>
                {/* <a href="/joinus" className="nav-item nav-link">Join Us</a> */}
                <a href="/contact" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav