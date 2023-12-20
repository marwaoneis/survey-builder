import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      if (response && response.data) {
        const { token, user } = response.data;

        // Store token in local storage
        localStorage.setItem("token", token);

        console.log("Login successful", user);

        if (!user.admin) {
          navigate("/dashboard");
        } else {
          navigate("/admin-dashboard");
        }
      } else {
        setError("Invalid response from the server");
        console.error("Invalid response from the server");
      }
    } catch (error) {
      setError("Invalid username/password");
      console.error(
        "Login failed",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <div className="ring">
      <i style={{ "--clr": "#00ff0a" }}></i>
      <i style={{ "--clr": "#ff0057" }}></i>
      <i style={{ "--clr": "#fffd44" }}></i>
      <div className="login">
        <h2>Login</h2>
        <div className="inputBx">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputBx">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="inputBx">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="links">
          <p className="white-text">Don't Have an Account?</p>
          <Link to="/auth/signup">
            <div>Signup</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
