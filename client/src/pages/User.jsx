import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3003/api/user/${signUp ? "signup" : "login"}`,
        {
          email,
          password,
        }
      );
      setMessage(response.data.message);

      if (!signUp) {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/signup");
  };

  return (
    <div>
      <div>
        <h2>{signUp ? "Sign Up" : "Login"}</h2>
        <p>{message}</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Enter your Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Enter Your Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">{signUp ? "Signup" : "Login"}</button>
        </form>
        <button onClick={() => setSignUp(!signUp)}>
          Switch to {signUp ? "Login" : "Signup"}
        </button>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
}
