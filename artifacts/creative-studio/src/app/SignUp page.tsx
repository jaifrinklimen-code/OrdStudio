import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import { getAppUrl } from "@/lib/getAppUrl";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, CheckCircle2, ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";

export default function SignupPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [existingUserMode, setExistingUserMode] = useState<'confirmed' | 'unconfirmed' | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const handleSignup = async () => {
    setErrorMessage(null);
    setExistingUserMode(null);

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Input sanitization — name
    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    if (!sanitizedName) {
      setErrorMessage("Please enter a valid name.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanEmail = email.trim();
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Password strength validation
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[0-9]/.test(password)) {
      setErrorMessage("Password must contain at least one number.");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage("Password must contain at least one special character.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const redirectOrigin = getAppUrl();
    const emailRedirectTo = `${redirectOrigin}/login`;

    try {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          emailRedirectTo,
          data: {
            full_name: sanitizedName,
          },
        },
      });

      if (error) {
        const msg = error.message?.toLowerCase() || '';
        if (msg.includes("already registered") || msg.includes("already exists") || msg.includes("user_already_exists")) {
          setSubmittedEmail(cleanEmail);
          setExistingUserMode('confirmed');
          setErrorMessage("An account already exists with this email. Please log in instead.");
          return;
        }
        setErrorMessage(error.message || "Account creation failed. Please try again.");
        return;
      }

      // Supabase returns data.user with empty identities array if user already exists
      if (data?.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
        setSubmittedEmail(cleanEmail);
        if (data.user.email_confirmed_at) {
          setExistingUserMode('confirmed');
          setErrorMessage("An account already exists with this email. Please log in instead.");
        } else {
          setExistingUserMode('unconfirmed');
          setErrorMessage("An account already exists with this email but is not verified yet. Please check your inbox or resend verification.");
        }
        return;
      }

      // Genuinely new signup
      setSubmittedEmail(cleanEmail);
      setIsSubmitted(true);
    } catch (err: any) {
      setErrorMessage("An unexpected error occurred during sign up. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    const targetEmail = submittedEmail || email.trim();
    if (!targetEmail) return;
    setIsResending(true);
    setResendStatus(null);
    try {
      const redirectOrigin = getAppUrl();
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: targetEmail,
        options: {
          emailRedirectTo: `${redirectOrigin}/login`,
        },
      });
      if (error) {
        setResendStatus("Failed to resend verification email. Please try again in a few moments.");
      } else {
        setResendStatus("Verification email resent successfully! Please check your inbox and spam folder.");
      }
    } catch {
      setResendStatus("Unable to resend verification email at this time.");
    } finally {
      setIsResending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0b0b14] flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-[440px] rounded-[32px] px-8 py-10 bg-[#171723]/90 border border-white/10 backdrop-blur-2xl shadow-2xl text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Mail size={32} className="animate-pulse" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Check your email
          </h1>

          <p className="text-white/70 mt-3 text-sm leading-relaxed">
            We've sent a verification link to:
          </p>

          <div className="mt-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-300 font-mono text-sm break-all font-medium inline-block max-w-full">
            {submittedEmail}
          </div>

          <p className="text-white/60 mt-4 text-xs leading-relaxed">
            Please verify your email to continue to ORD Studio. After confirming, you will be automatically returned to your workspace.
          </p>

          {resendStatus && (
            <div className={`mt-4 p-3 rounded-xl text-xs font-medium ${
              resendStatus.includes("successfully") 
                ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                : "bg-red-500/15 border border-red-500/30 text-red-300"
            }`}>
              {resendStatus}
            </div>
          )}

          <div className="mt-8 space-y-3">
            <button
              onClick={handleResendVerification}
              disabled={isResending}
              className="w-full h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <RefreshCw size={14} className={isResending ? "animate-spin text-purple-400" : "text-white/60"} />
              {isResending ? "Resending email..." : "Resend verification email"}
            </button>

            <button
              onClick={() => navigate("/login")}
              className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-medium transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-purple-600/20"
            >
              <ArrowLeft size={16} />
              Back to Sign In
            </button>
          </div>

          <p className="mt-6 text-[11px] text-white/40">
            Did not receive the email? Make sure to check your spam/junk folder.
          </p>
        </div>
      </div>
    );
  }

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
          className="w-full h-12 mt-8 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 mt-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-purple-500"
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

        {errorMessage && (
          <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs flex items-start gap-2.5">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-400" />
            <div className="flex-1 leading-relaxed">
              <p>{errorMessage}</p>
              {existingUserMode === 'confirmed' && (
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="mt-2 text-xs font-semibold text-purple-400 hover:text-purple-300 underline block cursor-pointer"
                >
                  Click here to log in →
                </button>
              )}
              {existingUserMode === 'unconfirmed' && (
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 underline cursor-pointer disabled:opacity-50"
                  >
                    {isResending ? "Resending..." : "Resend verification email"}
                  </button>
                  <span className="text-white/30">•</span>
                  <button
                    type="button"
                    onClick={() => navigate("/login")}
                    className="text-xs font-semibold text-purple-400 hover:text-purple-300 underline cursor-pointer"
                  >
                    Go to Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {resendStatus && (
          <div className={`mt-3 p-2.5 rounded-xl text-xs font-medium ${
            resendStatus.includes("successfully") 
              ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
              : "bg-red-500/15 border border-red-500/30 text-red-300"
          }`}>
            {resendStatus}
          </div>
        )}

        <button
          onClick={handleSignup}
          disabled={isSubmitting}
          className="w-full h-12 mt-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-95 transition cursor-pointer shadow-lg shadow-purple-600/25 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <RefreshCw size={16} className="animate-spin" />
              <span>Creating Account...</span>
            </>
          ) : (
            <span>Create Account</span>
          )}
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
        >
          Back to Sign In
        </button>

      </div>
    </div>
  );
}