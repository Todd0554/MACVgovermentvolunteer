import React from 'react'

function houses() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={{"backgroundColor":"#ddf6ff","height": "100px", "margin":"auto", "paddingTop":"15px","textAlign":"center","paddingBottom":"15px"}}>
          <img src="img/house3.png" alt="house1" style={{"height": "100%"}}/>
        </div>
        <div className="col-md-6" style={{"backgroundColor":"#ddf6ff","height": "100px", "margin":"auto", "textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
          <img src="img/house2.png" alt="house1" style={{"height": "100%"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={{"backgroundColor":"#ddf6ff","height": "100px", "margin":"auto", "display":"flex", "justifyContent": "center","textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
          <img src="img/cchn.png" alt="house1" style={{"margin":"0 auto"}}/>
        </div>
        <div className="col-md-6" style={{"backgroundColor":"#ddf6ff","height": "100px", "margin":"auto", "display":"flex", "justifyContent": "center","textAlign":"center","paddingTop":"15px","paddingBottom":"15px"}}>
          <img src="img/house1.png" alt="house1" style={{"margin":"0 auto"}}/>
          
        </div>
      </div>
    </div>
    
  )
}

export default houses