import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  MDBIcon,
} from "mdb-react-ui-kit";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/api/v1/user/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exists") {
              alert("Email not exists");
            } else if (res.data.message === "Login Success") {
              navigate("/home");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
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
            style={{ color: "hsl(218, 81%, 95%)", fontFamily: "Roboto, sans-serif" }}
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

          <MDBCard className="my-5 bg-glass" style={{ borderRadius: "35px", color: "black", width: "400px",minHeight: "450px", }}
            >
              <h1 style={{ color: "grey", fontFamily: "Roboto, sans-serif", textAlign: "center", marginTop: "25px" }}> Login </h1>
            <MDBCardBody className="p-5" style={{ marginTop: "10px"}}>

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

              <MDBBtn className="w-100 mb-4" size="md" onClick={login}>
                Login <MDBIcon fas icon="sign-in-alt" className="ms-1" />
              </MDBBtn>
              <div className="d-flex justify-content-center mb-4">
              <a href="/register" style={{color: "black", textAlign: "center", marginTop: "15px", textDecoration: "underline", }}>Don't have an account? Register here</a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;  
