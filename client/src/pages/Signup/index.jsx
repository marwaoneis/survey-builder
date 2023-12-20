import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    admin: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        userData
      );

      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="signup">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <label className="white-text bold ml-10">
              Username:
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />
          <div className="inputBx">
            <label className="white-text bold ml-10">
              Password:
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <br />
          <div className="inputBx">
            <label className="white-text bold ml-10">
              First Name:
              <input
                type="text"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />
          <div className="inputBx">
            <label className="white-text bold ml-10">
              Last Name:
              <input
                type="text"
                name="lastName"
                value={userData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <br />
          <div className="inputBx ml-10">
            <button type="submit">Signup</button>
            <p className="links white-text bold">
              ALready have an Account?{" "}
              <Link to="/auth/login">
                <div className="links">Login</div>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
