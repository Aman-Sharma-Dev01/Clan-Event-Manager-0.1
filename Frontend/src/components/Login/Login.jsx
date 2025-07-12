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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4001/api/users/login",
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("jwt", data.token);
      toast.success(data.message || "User logged in successfully", { duration: 3000 });
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
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="branding">
        <div className="logo">🛡️</div>
        <h1 className="brand-name">ClanEvents</h1>
        <p className="tagline">Join your clan and start your adventure</p>
      </div>

      <div className="tab-container">
        <Link to="/login" className="tab active">Login</Link>
        <Link to="/register" className="tab">Register</Link>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-heading">Welcome Back</h2>
        <p className="subheading">Sign in to your account to continue</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Logging in..." : "Sign In"}
        </button>

        <Link to="/" className="back-home">← Back to Home</Link>
      </form>
    </div>
  );
};

export default Login;
