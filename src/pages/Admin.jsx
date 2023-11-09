import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Message from "../component/Message";

import { logIn } from "../actions/userActions";


function Admin() {

    const initialLoginForm = { email: "", password: "" };
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { email, password } = loginForm;

    const setField = (field, value) => {
        setLoginForm({
          ...loginForm,
          [field]: value,
        });
      };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogIn = useSelector((state) => state.userLogIn);
    const { error, userInfo } = userLogIn;
    const { search } = useLocation();

    const redirect = search ? search.split("=")[1] : "/";


    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
    }, [navigate, userInfo, redirect]);


    const submitHandler = (e) => {
    e.preventDefault();

        console.log(email + "  /  " + password)
       
        dispatch(logIn(email, password, error));
      };



  return (
    <div>
    <h2 className="position-relative text-primary text-uppercase" style={{"textAlign": "center", "paddingTop":"40px"}}>Admin Login</h2>

    <div className="container-fluid py-5" style={{"width": "500px"}}>
      <div className="container">
          <div className="row g-5">
              <div className="col-xl-12 col-lg-12 wow slideInUp" data-wow-delay="0.3s">
          {error && <Message variant="danger">{error}</Message>}

                  <form onSubmit={submitHandler} noValidate >
                      <div className="row g-3">
                          <div className="col-12">
                              <input type="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}} name="Email" required onChange={(e) => {setField("email", e.target.value);
                }}/>
                          </div>
                          <div className="col-12">
                              <input type="text" className="form-control border-0 bg-light px-4" placeholder="Password" style={{height: "55px"}} name="Subject" required onChange={(e) => {setField("password", e.target.value);
                }}/>
                          </div>
                          <div className="col-12">
                              <button class="btn btn-primary w-100 py-3" type="submit">Login</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
</div>
</div>
  )
}

export default Admin