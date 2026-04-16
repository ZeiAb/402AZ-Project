import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";

export default function Login () {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors("");

    try {
      loginUser(email, password);
      navigate("/directory");
    } catch (err: any) {
      setErrors(err.message);
    }
    };
  return (
    <section className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      {error && <p className="mb-4 text-red-600">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full rounded"
          required
        />

        <div className="flex justify-end mt-1">
          Forgot my password?{""}
          <a href="/forgot-password" className="text-sm text-green-600 hover:underline">
            Reset here
          </a>
        </div> 

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-3 rounded border border-black"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}
