import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginComp.css";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    const credentials = btoa(`${email}:${password}`);
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {},
        {
          headers: {
            Authorization: `Basic ${credentials}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      const { token, userId } = response.data;
  
      if (token && userId) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userId", userId);
  
        window.dispatchEvent(new Event("authChanged"));
  
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        navigate("/");
      } else {
        throw new Error("Missing token or userId in response.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="login-comp-container">
      <div className="login-comp-map">
        <img src="/map.png" alt="Map illustration" className="login-comp-map-img" />
      </div>

      <form onSubmit={handleLogin} className="login-comp-form">
        <label className="login-comp-label">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-comp-input"
        />

        <label className="login-comp-label">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-comp-input"
        />

        {error && <div className="login-comp-error">{error}</div>}

        <button type="submit" disabled={loading} className="login-comp-button">
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-comp-divider">or</div>

        <button type="button" className="login-comp-join" onClick={() => navigate("/register")}>
          Join us and create new account
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
