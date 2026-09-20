import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    // Input sanitization — name
    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    if (!sanitizedName) {
      alert("Please enter a valid name.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    // Password strength validation
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(password)) {
      alert("Password must contain at least one number.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      alert("Password must contain at least one special character.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: sanitizedName,
        },
      },
    });

    if (error) {
      // Sanitize error message — don't expose internal details
      alert("Account creation failed. Please try again or use a different email.");
      return;
    }

    alert(
      "Verification email sent. Please check your inbox and verify your email before signing in."
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0b0b14] flex items-center justify-center px-6">
      <div className="w-full max-w-[420px] rounded-[32px] px-8 py-10 bg-[#171723]/90 border border-white/10 backdrop-blur-2xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-center text-white/60 mt-2">
          Join OrdStudio and start creating.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-12 mt-8 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 mt-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40"
        />

        <div className="relative mt-3 w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 pl-4 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="relative mt-3 w-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-12 pl-4 pr-10 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors focus:outline-none"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="mt-3 text-xs text-white/40 space-y-0.5 px-1">
          <p>Password requirements:</p>
          <p>• At least 8 characters</p>
          <p>• At least 1 uppercase & 1 lowercase letter</p>
          <p>• At least 1 digit & 1 special character</p>
        </div>

        <button
          onClick={handleSignup}
          className="w-full h-12 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium"
        >
          Create Account
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