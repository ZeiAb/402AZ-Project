import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../services/auth';
import { useEffect, useState} from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white px-6 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold leading-tight">
            Coventry EcoConnect
          </h1>
          <span className="text-xs text-green-100">7380053</span>
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/directory" className="hover:text-green-200">Directory</Link>

          {user ? (
            <>
              <span className="text-green-100">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="hover:text-green-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-200">Login</Link>
              <Link to="/register" className="hover:text-green-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}