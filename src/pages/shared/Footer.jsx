import React from "react";
import logo from "../../assets/jobs-logo.png";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="CareerConnect" className="w-8 h-8" />
              <span className="text-white font-bold text-lg">
                Career<span className="text-indigo-400">Connect</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Connecting talent with the right opportunities. Your next career move starts here.
            </p>
            <div className="flex gap-2">
              {[
                { icon: <FiLinkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <FiTwitter className="w-4 h-4" />, label: "Twitter" },
                { icon: <FiGithub className="w-4 h-4" />, label: "GitHub" },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h6>
            <ul className="space-y-2.5">
              {["Find Jobs", "Post a Job", "Career Advice", "Resume Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h6>
            <ul className="space-y-2.5">
              {["About Us", "Contact Us", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Legal
            </h6>
            <ul className="space-y-2.5">
              {["Terms & Conditions", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            &copy; {year} CareerConnect. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built for job seekers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
