import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import jobIcon from "../../assets/jobs-logo.png";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser().catch((error) => console.log(error.message));
    setMobileOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-indigo-600 ${
      isActive ? "text-indigo-600 font-semibold" : "text-gray-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img className="w-8 h-8" src={jobIcon} alt="CareerConnect" />
            <span className="text-lg font-bold text-gray-900">
              Career<span className="text-indigo-600">Connect</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/myApplications" className={linkClass}>My Applications</NavLink>
            <NavLink to="/addJob" className={linkClass}>Post a Job</NavLink>
            <NavLink to="/myPostedJobs" className={linkClass}>My Posted Jobs</NavLink>
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-100"
                  />
                )}
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-xl transition-colors"
                >
                  <FiLogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/register"
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Register
                </Link>
                <Link
                  to="/signin"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FiX className="w-5 h-5 text-gray-700" />
            ) : (
              <FiMenu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/myApplications", label: "My Applications" },
              { to: "/addJob", label: "Post a Job" },
              { to: "/myPostedJobs", label: "My Posted Jobs" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-gray-100 px-3">
              {user ? (
                <div className="flex items-center gap-3">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-100 shrink-0"
                    />
                  )}
                  <button
                    onClick={handleSignOut}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2 rounded-lg text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    Register
                  </Link>
                  <Link
                    to="/signin"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-center py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
