import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout.js";
export default function Navbar() {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li onClick={handleClick}>Logout</li>
      </ul>
    </nav>
  );
}
