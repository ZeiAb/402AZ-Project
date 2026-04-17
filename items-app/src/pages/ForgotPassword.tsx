import { useState } from "react";
import { startForgotPassword, finishForgotPassword } from "../services/auth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [step, setStep] = useState<"start" | "confirm">("start");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      await startForgotPassword(email);
      setStep("confirm");
      setMessage("Check your email for the reset code.");
    } catch (err: any) {
      setIsError(true);
      setMessage(err.message || "Could not start password reset.");
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    try {
      await finishForgotPassword(email, code, newPassword);
      setMessage("Password reset successful. You can now log in.");
    } catch (err: any) {
      setIsError(true);
      setMessage(err.message || "Password reset failed.");
    }
  };

  return (
    <section className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>

      {message && (
        <p className={`mb-4 ${isError ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}

      {step === "start" ? (
        <form onSubmit={handleStart} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-3 rounded border border-black"
          >
            Send Reset Code
          </button>
        </form>
      ) : (
        <form onSubmit={handleConfirm} className="space-y-4">
          <input
            type="text"
            placeholder="Verification Code"
            className="border p-3 w-full rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
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
            className="bg-green-600 text-white px-5 py-3 rounded border border-black"
          >
            Reset Password
          </button>
        </form>
      )}

      <p className="mt-4">
        <Link to="/login" className="text-blue-600 underline">
          Back to Login
        </Link>
      </p>
    </section>
  );
}