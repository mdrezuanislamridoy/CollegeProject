import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginSignup() {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setMessage("");
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup
        ? "http://localhost:3003/api/user/signup"
        : "http://localhost:3003/api/user/login";

      const response = await axios.post(url, { email, password });
      setMessage(response.data.message);

      if (!isSignup) {
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("email", JSON.stringify(email));
        navigate("/profile");
      } else {
        setMessage("Signup successful! Please log in.");
        setIsSignup(false);
      }
    } catch (error) {
      setMessage(
        error.response?.data.message ||
          `${isSignup ? "Signup" : "Login"} failed. Please try again.`
      );
    }
  };

  return (
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <h2 className="font-bold text-2xl">RR-CODER</h2>
              <h2 className="mb-8 text-2xl font-bold">
                {isSignup ? "Create your account" : "Log in to your account"}
              </h2>
              <p>{message}</p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-full focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600"
                >
                  {isSignup ? "Sign Up" : "Log In"}
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  onClick={toggleForm}
                  className="text-blue-600 underline"
                >
                  {isSignup ? "Log In" : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
