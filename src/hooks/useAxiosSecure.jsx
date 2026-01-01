import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

//   using axios interceptor to caught the error and log out user
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("Error caught in the interceptor ", error);
        if (error.status === 401 || error.status === 403) {
          console.log("Need to logout");
          signOutUser()
            .then(() => {
              console.log("Log out user");
              navigate('/signin')
            })
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
