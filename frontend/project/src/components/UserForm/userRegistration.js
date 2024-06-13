import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./userRegistration.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const UserRegistration = () => {
  const authCxt = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();

  const formSubmitHandler = async (eve) => {
    eve.preventDefault();

    let obj;
    if (isLogin) {
      obj = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
    } else {
      obj = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: roleRef.current.value,
      };
    }

    // console.log("obj>>>", obj);

    let url;

    if (isLogin) {
      url = "http://localhost:4000/api/v1/users/login";
    } else {
      url = "http://localhost:4000/api/v1/users/register";
    }

    try {
      const reposne = await axios.post(url, obj);
      // console.log("response", reposne);
      if (reposne.status === 200) {
        authCxt.login(reposne.data.data.accessToken);
        navigate("/");
      }
      alert(`${reposne.data.message}`);
    } catch (error) {
      console.log("userRegisrtionError", error);
      if (error.response.status === 409) {
        alert("User Already Exist");
      } else {
        alert("Email or Password incorrect");
      }
    }
  };

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="usermainFormcontainer">
      <div className="usercontainer">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form action="" className="userform" onSubmit={formSubmitHandler}>
          {!isLogin && (
            <div>
              <label htmlFor="text">Name</label>
              <input type="text" ref={usernameRef} />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" ref={passwordRef} />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="role">Role</label>
              <select name="role" className="selectionRole" ref={roleRef}>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}
          <div className="submitandswicthBtn">
            <button type="submit">{isLogin ? "Login" : "Creat Account"}</button>
            <button type="button" onClick={switchAuthHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
