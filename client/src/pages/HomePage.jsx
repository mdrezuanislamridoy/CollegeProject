import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../assets/background.jpeg";
import PersonProfile from "../assets/person.webp";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const loggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    if (!loggedIn) {
      navigate("/signlog");
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/posts/get");
        setPosts(response.data.posts);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3003/api/user/getUser"
        );
        setUsers(response.data.userss);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section
                  className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                  <h2 className="text-4xl font-bold">
                    Welcome to Our Platform
                  </h2>
                </section>

                {/* Recent Posts */}
                <section className="container mx-auto my-10">
                  <h3 className="text-2xl font-semibold mb-4">Recent Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(0, 6).map((post) => (
                      <div
                        key={post._id}
                        className="bg-white p-4 shadow-md rounded"
                      >
                        <h4 className="font-bold text-lg">{post.title}</h4>
                        <p className="text-gray-600">{post.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-3">
                    <button className="bg-slate-600 text-white px-4 py-2 rounded">
                      All Posts
                    </button>
                  </div>
                </section>

                {/* Most Viewed Posts */}
                <section className="container mx-auto my-10">
                  <h3 className="text-2xl font-semibold mb-4">
                    Most Viewed Posts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.slice(0, 3).map((post) => (
                      <div
                        key={post._id}
                        className="bg-white p-4 shadow-md rounded"
                      >
                        <h4 className="font-bold text-lg">{post.title}</h4>
                        <p className="text-gray-600">{post.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-3">
                    <button className="bg-slate-600 text-white px-4 py-2 rounded">
                      All Posts
                    </button>
                  </div>
                </section>

                {/* Add Friend Section */}
                <section className="container mx-auto my-10">
                  <h3 className="text-2xl font-semibold mb-4">Add Friend</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {users.slice(0, 3).map((user) => (
                      <div
                        key={user._id}
                        className="bg-white p-4 shadow-md rounded text-center"
                      >
                        <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex justify-center items-center">
                          <img src={PersonProfile} />
                        </div>
                        <h4 className="font-bold">{user.email}</h4>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
                          Add Friend
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-3">
                    <button className="bg-slate-600 text-white px-4 py-2 rounded">
                      All Posts
                    </button>
                  </div>
                </section>
              </>
            }
          />
        </Routes>
      </main>
      <div className="bg-blue-200 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl italic text-gray-700">
              &quot;The only way to do great work is to love what you do. If you
              haven’t found it yet, keep looking. Don’t settle.&quot;
            </blockquote>
            <p className="mt-4 text-lg font-semibold text-gray-900">
              – Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
