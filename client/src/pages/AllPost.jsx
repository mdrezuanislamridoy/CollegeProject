/* eslint-disable react/prop-types */
export default function AllPost({ posts }) {
  console.log("Posts passed to AllPost:", posts); // Debugging

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border-b py-2">
            <h4 className="text-lg font-bold">{post.title}</h4>
            <p>{post.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
