import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff } from "lucide-react";
type AuthPageProps = {
  onGoogleLogin: () => void;
};

export default function AuthPage({ onGoogleLogin }: AuthPageProps) {
const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);

    const handleEmailLogin = async () => {
      // Rate limiting check
      if (lockoutUntil && Date.now() < lockoutUntil) {
        const remaining = Math.ceil((lockoutUntil - Date.now()) / 1000);
        alert(`Too many login attempts. Please try again in ${remaining} seconds.`);
        return;
      }

      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email.trim())) {
        alert("Please enter a valid email address.");
        return;
      }

      if (!password) {
        alert("Please enter your password.");
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (!error) {
        setLoginAttempts(0);
        setSessionLockout(null);
        return;
      }

      // Increment login attempts
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      // Lock out after 5 failed attempts for 60 seconds
      if (newAttempts >= 5) {
        setLockoutUntil(Date.now() + 60000);
        alert("Too many failed attempts. Please try again in 60 seconds.");
        return;
      }

      // Generic error message — no user enumeration
      alert("Invalid email or password. Please try again.");
    };

    const setSessionLockout = (val: null) => {
      setLockoutUntil(val);
    };
 return (
<div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-8">

      {/* Background Image */}
<img
  src="/image.png"
  alt="Login Background"
  className="absolute inset-0 w-full h-full object-cover object-center"
  draggable={false}
/>
{/* Dark overlay */}
<div className="absolute inset-0 bg-black/20" />

{/* Login Card */}
<div
  className="
    relative z-10
    w-full
max-w-[420px]
    mx-auto

    rounded-[32px]
    px-8 pt-8 pb-12
    bg-[#171723]/85
    border border-white/10
    backdrop-blur-2xl
    shadow-[0_20px_80px_rgba(0,0,0,0.45)]
"
>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.01] border border-white/[0.08] flex items-center justify-center shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
            <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="o-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
                <linearGradient id="o-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f355da" />
                  <stop offset="100%" stopColor="#7000ff" />
                </linearGradient>
                <linearGradient id="o-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0844" />
                  <stop offset="100%" stopColor="#ffb199" />
                </linearGradient>
                <filter id="o-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="50,12 85,32 85,68 50,88 15,68 15,32" stroke="url(#o-grad-1)" strokeWidth="1" strokeDasharray="6 6" opacity="0.35" />
              <g filter="url(#o-glow)">
                <path d="M 50 20 C 33.4 20, 20 33.4, 20 50 C 20 58.3, 23.4 65.8, 28.8 71.2" 
                      stroke="url(#o-grad-1)" strokeWidth="9.5" strokeLinecap="round" />
                <path d="M 28.8 71.2 C 34.2 76.6, 41.7 80, 50 80 C 66.6 80, 80 66.6, 80 50 C 80 46.5, 79.4 43.1, 78.2 40.0" 
                      stroke="url(#o-grad-2)" strokeWidth="9.5" strokeLinecap="round" />
                <path d="M 78.2 40.0 C 74.8 31.2, 66.6 24.8, 56.8 21.2" 
                      stroke="url(#o-grad-3)" strokeWidth="9.5" strokeLinecap="round" />
                <path d="M 50 40 L 53 47 L 60 50 L 53 53 L 50 60 L 47 53 L 40 50 L 47 47 Z" fill="url(#o-grad-3)" />
              </g>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome to OrdStudio
        </h1>

        <p className="text-white/70 text-center mt-3 leading-relaxed">
          Transform ideas into presentations, stickers,
          AI content and creative workflows.
        </p>

        {/* Google Button */}
        <button
  onClick={onGoogleLogin}
  className="mt-8 w-full h-12 bg-white text-black font-medium text-[16px] rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all duration-200"
>
          <img
  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
  alt="Google"
  className="w-5 h-5"
/>
          Continue with Google
        </button>
{/* Divider */}
<div className="flex items-center my-6">
  <div className="flex-1 border-t border-white/10"></div>
  <span className="px-3 text-white/40 text-sm">OR</span>
  <div className="flex-1 border-t border-white/10"></div>
</div>

{/* Email */}
<input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 mb-3 outline-none focus:border-purple-500"
/>

{/* Password */}
<div className="relative mb-4 w-full">
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

{/* Sign In */}
<button
  onClick={handleEmailLogin}
  className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition"
>
  Sign In
</button>
<button
  onClick={() => navigate("/forgot-password")}
  className="w-full mt-3 text-sm text-purple-400 hover:text-purple-300"
>
 Forgot Password 
</button>
{/* Create Account */}
<button
onClick={() => navigate("/signup")}
  className="w-full mt-2 h-10 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition"
>
  Create Account
</button>
{/* Sign Up */}

<p className="mt-4 text-center text-sm text-white/50">Secure authentication powered by OrdStudio</p>
        {/* Footer */}
     <div className="mt-6 text-center text-xs text-white/50 flex items-center justify-center gap-2">
  <span>🔒</span>
  Secure authentication powered by Google
</div>

      </div>
    </div>
  );
}