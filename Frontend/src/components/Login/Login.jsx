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
  const [loading, setLoading] = useState(false); // 👈 loading state

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // start loading

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

      localStorage.setItem("jwt", data.token);

      toast.success(data.message || "User1 logged in successfully", {
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
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  "Something went wrong. Please try again.",
  { duration: 3000 }
);
    } finally {
      setLoading(false); // stop loading
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
            disabled={loading}
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="submit" disabled={loading}>
          {loading ? "Logging in..." : "Sign in"}
        </button>

        <p className="signup-link">
          No account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
