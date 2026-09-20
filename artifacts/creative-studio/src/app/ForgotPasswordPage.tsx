import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

// Allowed redirect origins for password reset
const ALLOWED_REDIRECT_ORIGIN = import.meta.env.VITE_APP_URL || window.location.origin;

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [resetAttempts, setResetAttempts] = useState(0);
  const [cooldownUntil, setCooldownUntil] = useState<number | null>(null);

  const handleReset = async () => {
    // Rate limiting
    if (cooldownUntil && Date.now() < cooldownUntil) {
      const remaining = Math.ceil((cooldownUntil - Date.now()) / 1000);
      alert(`Please wait ${remaining} seconds before requesting another reset.`);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    // Increment attempts
    const newAttempts = resetAttempts + 1;
    setResetAttempts(newAttempts);

    // After 3 attempts, enforce 120 second cooldown
    if (newAttempts >= 3) {
      setCooldownUntil(Date.now() + 120000);
    }

    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      {
        redirectTo: `${ALLOWED_REDIRECT_ORIGIN}/reset-password`,
      }
    );

    if (error) {
      // Generic message — don't reveal if email exists
      alert("If this email is registered, a reset link has been sent.");
    } else {
      alert(
        "If this email is registered, a password reset link has been sent. Please check your inbox."
      );

      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b14] flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-[32px] px-8 py-10 bg-[#171723]/90 border border-white/10 backdrop-blur-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Forgot Password
        </h1>

        <p className="text-center text-white/60 mt-2">
          Enter your email to reset your password.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 mt-8 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40"
        />

        <button
          onClick={handleReset}
          className="w-full h-12 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium"
        >
          Send Reset Link
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-sm text-purple-400"
        >
          Back to Sign In
        </button>

      </div>
    </div>
  );
}