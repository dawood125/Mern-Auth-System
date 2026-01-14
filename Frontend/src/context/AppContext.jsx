import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  axios.defaults.withCredentials = true;

  const getUserState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const getUserData = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.get(backendUrl + "/api/user/data");

      if (data && data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data?.message || "Failed to fetch user data");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    getUserState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
