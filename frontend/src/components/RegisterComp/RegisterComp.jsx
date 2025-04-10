import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegisterComp.css";

const RegisterComp = () => {
  const [user_name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  console.log(apiUrl);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }
  
    try {
      await axios.post(`${apiUrl}/api/auth/register`, {
        user_name,
        email,
        password,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="register-comp-container">
      <div className="register-comp-map">
        <img
          src="/map.png"
          alt="Map illustration"
          className="register-comp-map-img"
        />
      </div>

      <form onSubmit={handleRegister} className="register-comp-form">
        <label className="register-comp-label">Username</label>
        <input
          type="text"
          required
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
          className="register-comp-input"
        />

        <label className="register-comp-label">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-comp-input"
        />

        <label className="register-comp-label">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-comp-input"
        />

        <label className="register-comp-label">Confirm Password</label>
        <input
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="register-comp-input"
        />

        {error && <div className="register-comp-error">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="register-comp-button"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterComp;
