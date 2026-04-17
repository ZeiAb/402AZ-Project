import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      loginUser(email, password);
      navigate("/directory");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-[calc(100vh-140px)] bg-[#f6fbf6] flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md border p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-600 mb-6">
          Sign in to continue exploring sustainable businesses!
        </p>

        {error && (
          <p className="mb-4 rounded-md bg-red-50 text-red-600 px-3 py-2 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-green-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white px-5 py-3 rounded-lg border border-black hover:bg-green-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-700 font-medium hover:underline">
            Register
          </Link>
        </p>
      </section>
    </main>
  );
}
