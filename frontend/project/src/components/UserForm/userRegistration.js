import React, { useState } from "react";
import "./userRegistration.css";

const UserRegistration = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="usermainFormcontainer">
      <div className="usercontainer">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form action="" className="userform">
          {!isLogin && (
            <div>
              <label htmlFor="text">Name</label>
              <input type="text" />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="role">Role</label>
              <select name="role" className="selectionRole">
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
