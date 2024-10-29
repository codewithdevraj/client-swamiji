import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serverUrl = import.meta.env.VITE_SERVER;

const Login = ({toggleForm}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/auth/user/login`, formData, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/"); // redirect to home page
      }, 2000);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An error occurred while logging in."
      );
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <h2>Login</h2>
        </div>
        <div className="input-fields">
          <label>Username or Email:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-fields">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="toggle-link" onClick={toggleForm}>
        Don't have an account? Sign Up
      </p>
    </div>
  );
};

export default Login;
