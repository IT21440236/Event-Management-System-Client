import { useState } from "react";
import axios from "axios";
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Register() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/v1/user/add", {
        userName: userName,
        email: email,
        password: password,
      });
      alert("User Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <MDBContainer
      fluid
      className="p-4"
      style={{
        background: "radial-gradient(ellipse at center, rgba(30, 30, 30, 0.4) 0%, rgba(0, 0, 0, 0.8) 100%)",
        overflow: "hidden",
        height: "100vh",
        display: "flex",       
        alignItems: "center",  
        justifyContent: "center",
      }}
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            InfiniteImagination Events <br />
            <p style={{ color: "gold", fontSize: "30px"}}>elevating events to extraordinary experiences</p>
          </h1>

          {/* <p className="px-3" style={{ color: "white" }}>
            Crafting Extraordinary Events, Tailored to Perfection
          </p> */}
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass" style={{ borderRadius: "35px", color: "black", width: "400px",minHeight: "450px", }}>
          <h1 style={{ color: "grey", fontFamily: "Roboto, sans-serif", textAlign: "center", marginTop: "25px" }}> Register </h1> 
            <MDBCardBody className="p-5">
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="User name"
                    id="form1"
                    type="text"
                    value={userName}
                    onChange={(event) => {
                      setuserName(event.target.value);
                    }}
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md" onClick={save}>
                sign up
              </MDBBtn>
              <p style={{alignItems: "center", marginLeft:"65px"}}>Have an account <a href="/login">Sign-in</a></p>

              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
