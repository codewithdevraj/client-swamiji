import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const serverUrl = import.meta.env.VITE_SERVER;

const Register = ({toggleForm}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
      const response = await axios.post(`${serverUrl}/auth/user/register`, formData);
      if (response.status === 201) {
        toast.success( response.data.message );
        const token = response.data.token;
        Cookies.set("token", token, { expires: 6 });

        const sessionId = response.data.sessionId;
        Cookies.set("sessionId", sessionId, {
          expires: 6,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "An error occurred while registering"
      );
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <h2>Sign Up</h2>
        </div>
        <div className="input-fields">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-fields">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
        <button type="submit">Sign Up</button>
      </form>
      <p className="toggle-link" onClick={toggleForm}>
        Already have an account? Login
      </p>
    </div>
  );
};

export default Register;
