/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useState } from "react";

export default function AddPost({ fetchPosts }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3003/api/posts/add", {
        title,
        description,
      });
      console.log("Post Added:", response.data); // Debugging
      alert("Post added successfully!");
      setTitle("");
      setDescription("");
      fetchPosts(); // Fetch posts after adding a new one
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={addPost} className="bg-white p-4 shadow-md rounded mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Post</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
