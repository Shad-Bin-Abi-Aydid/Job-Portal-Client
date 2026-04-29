import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";
import { useNavigate, Link } from "react-router-dom";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setPasswordError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Password needs 6+ characters, 1 uppercase letter and 1 number.");
      return;
    }

    createUser(email, password)
      .then(() => navigate("/"))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Illustration */}
        <div className="hidden lg:flex justify-center">
          <div className="w-80">
            <Lottie animationData={registerLottieData} />
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
            <p className="text-sm text-gray-500 mt-1">
              Already have an account?{" "}
              <Link to="/signin" className="text-indigo-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Min 6 chars, 1 uppercase, 1 number"
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                />
              </div>
              {passwordError && (
                <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                  <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {passwordError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm shadow-sm"
            >
              Create Account
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

export default Register;
