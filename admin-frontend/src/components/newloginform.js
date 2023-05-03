import React,{useState} from 'react';
import "./newloginform.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { FaAlignCenter } from 'react-icons/fa';

const  Newloginform =  () => {

    const Navigate = useNavigate();
    const [email1, setemail] = useState("");
    const [password1, setpassword] = useState(""); 
    const [popupStyle, setPopupStyle] = useState("hide"); 

    const handleSubmit = async (event) => {
      console.log(email1);
      console.log(password1);
      event.preventDefault();
      try {
        const response = await axios.post(
          "https://59fa-103-156-19-229.ngrok-free.app/auth/login",
        
          { email : email1,
             password :password1
             }
        );
        console.log(response.status);
        console.log(response);
        if (response.status === 200) {
          console.log("inside the fuction")
          localStorage.setItem("token", response.data.token); // added to store token in local storage
          localStorage.setItem("email", email1); // added to store email in local storage
  
          Navigate("/analyse");
        } else {
          setPopupStyle("login-popup");
        }
      } catch (error) {
        setPopupStyle("login-popup");
      }
    };

    return (
      <div >
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>
      
              <MDBCol md="5">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-center align-items-center mt-2 mb-4">
                    <MDBIcon
                      fas
                      icon="cubes fa-3x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold">Welcome Admin</span>
                  </div>
      
                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>
      
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    required
                    value={email1}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    required
                    value={password1}
                    onChange={(e) => setpassword(e.target.value)}
                  />
      
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      backgroundColor: "#3D6DCC",
                      border: "none",
                      borderRadius: "10px",
                    }}
                    onClick={handleSubmit}
                    disabled={!email1 || !password1}
                  >
                    Login
                  </button>
      
                  <div className="d-flex flex-row justify-content-start">
                    <a href="#!" className="small text-muted me-1">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
        </div>
      );
      
}

export default Newloginform;
