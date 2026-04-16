import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      registerUser({ name, email, password });
      navigate("/directory");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register</h1>

      {error && (
        <p className="mb-4 text-red-600 font-medium">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 w-full rounded"
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full rounded"
          required
        />

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full rounded"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-3 rounded border border-black"
        >
          Create Account
        </button>
      </form>
    </section>
  );
}