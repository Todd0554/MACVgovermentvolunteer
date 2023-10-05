import React from 'react'

function Gallery() {
  return (
    <div className="row">
       <div className="col-md-6" style={{"margin":"auto", "padding":"15px 40px","textAlign":"center","paddingBottom":"15px"}}>
        <img style={{"width": "80%"}} src="img/VSNH art wall.jpeg" alt="VSNH art wall" />
       </div>
       <div className="col-md-6" style={{"margin":"auto", "padding":"15px 40px","textAlign":"center","paddingBottom":"15px"}}>
        <img style={{"width": "80%"}} src="img/VSNH front .jpeg" alt="VSNH front" />
       </div>
    </div>
  )
}

export default Gallery