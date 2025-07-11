import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthProvider.jsx";

const Login = () => {
  const { setIsAuthenticated, setProfile } = useAuth();
  const navigateTo = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store token
      localStorage.setItem("jwt", data.token);

      toast.success(data.message || "User logged in successfully", {
        duration: 3000,
      });

      setProfile(data.user);
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      navigateTo("/");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Please fill all required fields",
        { duration: 3000 }
      );
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleLogin}>
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span></span>
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
