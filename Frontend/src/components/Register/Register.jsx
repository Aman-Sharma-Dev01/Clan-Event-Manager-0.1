import  { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import mruLogo from "../../assets/mru.jpg"; // adjust the path if needed


const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    password: "",
    clanName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4001/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message || "Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="branding">
     <img src={mruLogo} alt="Manav Rachna Logo" className="logo-img" />


        
      </div>

      <div className="tab-container">
        <Link to="/login" className="tab">Login</Link>
        <Link to="/register" className="tab active">Register</Link>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Create Account</h2>
        <p className="subheading">Join a clan and start participating in events</p>

        <div className="input-row">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="Firstname"
              placeholder="John"
              value={formData.Firstname}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="Lastname"
              placeholder="Doe"
              value={formData.Lastname}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div className="input-group">
          <label>Choose Your Clan</label>
          <select
            name="clanName"
            value={formData.clanName}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select a clan</option>
            <option value="Wild Cats">Wild Cats</option>
            <option value="Forest Rhinos">Forest Rhinos</option>
            <option value="Air Falcons">Air Falcons</option>
            <option value="Water Sharks">Water Sharks</option>
          </select>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <Link to="/" className="back-home">← Back to Home</Link>
      </form>
    </div>
  );
};

export default Register;
