import { useState, useEffect } from "react";
import axios from "axios";
import AllPost from "./AllPost";
import AddPost from "../components/AddPost";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3003/api/posts/get");
      console.log("Fetched Posts:", response.data); // Debugging
      if (response.data && Array.isArray(response.data.posts)) {
        setPosts(response.data.posts);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Add Post Form */}
      <AddPost fetchPosts={fetchPosts} />

      {/* Posts List */}
      <div className="bg-white p-4 shadow-md rounded">
        <h3 className="text-xl font-semibold mb-4">All Posts</h3>
        <AllPost posts={posts} />
      </div>
    </div>
  );
}
