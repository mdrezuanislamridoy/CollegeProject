import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (!loggedIn) {
      navigate("/signlog");
    } else {
      setUser({
        name: "John Doe",
        email: "john.doe@example.com",
        profilePic: "https://via.placeholder.com/150", // Replace with actual URL
      });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/signlog");
  };

  if (!user) {
    return <p>Loading...</p>; // Add a loading state if the user data is being fetched
  }

  return (
    <div className="container mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
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
