import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="bg-slate-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">RR Events</h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link
              to="/profile"
              className="hover:text-gray-300 bg-slate-600 text-white"
            >
              profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
