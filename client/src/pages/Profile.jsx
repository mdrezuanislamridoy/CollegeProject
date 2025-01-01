import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    const email = JSON.parse(localStorage.getItem("email"));

    if (!loggedIn) {
      navigate("/signlog", { replace: true });
    } else {
      setUser({
        email,
        profilePic: "https://via.placeholder.com/150",
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    navigate("/signlog", { replace: true });
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
