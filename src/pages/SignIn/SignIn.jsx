import React, { useContext, useState } from "react";
import loginLottieData from "../../assets/Login.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

const SignIn = () => {
  const { loginUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => navigate(from))
      .catch(() => setErrorMessage("Invalid email or password. Please try again."));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration */}
        <div className="hidden lg:flex justify-center">
          <div className="w-80">
            <Lottie animationData={loginLottieData} />
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-sm text-gray-500 mt-1">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                Register
              </Link>
            </p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-indigo-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Your password"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
              {errorMessage && (
                <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                  <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errorMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-400">or continue with</span>
            </div>
          </div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
