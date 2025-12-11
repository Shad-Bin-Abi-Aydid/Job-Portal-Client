import React, { useContext, useState } from "react";
import loginLottieData from "../../assets/Login.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SignIn = () => {
    const {loginUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result =>{
        console.log('Sign in ', result.user);
        
    })
    .catch(error =>{
        console.log('Error is ', error.message);
        setErrorMessage(error.message);
    })

    console.log(email, password);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <div className="w-80 h-80">
              <Lottie animationData={loginLottieData}></Lottie>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="ml-4 my-4 text-5xl font-bold">Login now!</h1>
              <form onSubmit={handleSignIn}>
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
                    {errorMessage}
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4">
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
