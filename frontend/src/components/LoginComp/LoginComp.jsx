import { useState } from "react";
import axios from "axios";
import "./LoginComp.css";

const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      const token = response.data.token;

      if (token) {
        localStorage.setItem("authToken", token);

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        navigate("/");
      } else {
        throw new Error("No token received from server.");
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
        <img
          src="/map.png"
          alt="Map illustration"
          className="login-comp-map-img"
        />
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

        <button
          type="submit"
          disabled={loading}
          className="login-comp-button"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="login-comp-divider">or</div>

        <button type="button" className="login-comp-join">
          Join us and create new account
        </button>
      </form>
    </div>
  );
};

export default LoginComp;
