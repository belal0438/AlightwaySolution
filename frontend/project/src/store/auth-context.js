import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext({
  token: "",
  RequestApplication: [],
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialTokenValue = localStorage.getItem("token");
  const [token, setToken] = useState(initialTokenValue);
  const [reqApp, setReqApp] = useState([]);

  const userLoggedIn = !!token;
  // console.log("userLoggedIn", userLoggedIn);
  const logInHndler = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  async function fechData() {
    const url = "http://localhost:4000/api/v1/leave/application";

    const Getresult = await axios.get(url, {
      headers: { Authorization: token },
    });
    setReqApp((prevItems) => [...prevItems, Getresult.data.data]);
  }

  useEffect(() => {
    fechData();
  }, []);

  const contextVlaue = {
    token: token,
    RequestApplication: reqApp,
    isLoggedIn: userLoggedIn,
    login: logInHndler,
    logout: logOutHandler,
  };

  // console.log("contextVlaue", contextVlaue);

  return (
    <AuthContext.Provider value={contextVlaue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
