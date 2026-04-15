import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex items-centre justify-between p-4 bg-green-700 text-white">
      <Link to="/" className="font-bold text-lg">
        Coventry EcoConnect
        <div>7380053</div>
      </Link>

      <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/directory">Directory</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
