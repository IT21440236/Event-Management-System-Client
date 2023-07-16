import { useState } from "react";
import axios from "axios";

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
    <div>
      <div className="container mt-4">
        <div className="card">
          <h1>User Registation</h1>

          <form>
            <div className="form-group">
              <label>User name</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Enter Name"
                value={userName}
                onChange={(event) => {
                  setuserName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-4"
              onClick={save}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
