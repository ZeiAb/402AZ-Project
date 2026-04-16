import { useState } from "react";
import { resetPassword } from "../services/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      resetPassword(email, newPassword);
      setMessage("Password reset successful! You can now log in.");
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <section className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

      {message && (
        <p className="mb-4 text-green-600">{message}</p>
      )}

      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New Password"
          className="border p-3 w-full rounded"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
}