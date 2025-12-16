import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import registerLottieData from "../../assets/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    setPasswordError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("At least 6 char, 1 uppercase and 1 digit");
      return;
    } else {
      // create user through email and password
      createUser(email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("Error =>", error.message);
        });
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <div className="w-80 h-80">
              <Lottie animationData={registerLottieData}></Lottie>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="ml-4 my-4 text-5xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <div className="text-sm text-red-700 font-semibold">
                    {passwordError}
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Register
                  </button>
                </fieldset>
              </form>
              <div className="divider">OR</div>
              <div className="mx-auto">
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
