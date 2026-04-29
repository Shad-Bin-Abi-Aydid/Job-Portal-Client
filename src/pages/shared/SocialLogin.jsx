import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state || "/";

  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => navigate(from))
      .catch((error) => console.log(error.message));
  };

  return (
    <button
      onClick={handleGoogle}
      className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
    >
      <FcGoogle className="w-5 h-5" />
      Continue with Google
    </button>
  );
};

export default SocialLogin;
