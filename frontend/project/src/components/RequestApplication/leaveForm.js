import React, { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./leaveForm.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const LeaveForm = () => {
  const autCtxt = useContext(AuthContext);
  const navigate = useNavigate();

  const token = autCtxt.token;
  if (!token) {
    alert("User not logged in");
  }

  const leaveTypeRef = useRef();
  const fromDateRef = useRef();
  const toDateRef = useRef();
  const reasonRef = useRef();

  const onSubmitApplicationHandler = async (eve) => {
    eve.preventDefault();

    const obj = {
      leaveType: leaveTypeRef.current.value,
      fromDate: fromDateRef.current.value,
      toDate: toDateRef.current.value,
      reason: reasonRef.current.value,
    };

    console.log("application", obj);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/leave/application",
        obj,
        { headers: { Authorization: token } }
      );
      // console.log("AppLresponse", response);
      if (response.status === 201) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Application Error", error);
    }
  };

  return (
    <div className="usermainFormcontainer">
      <div className="usercontainer">
        <h2>Leave application Form</h2>
        <form
          action=""
          className="leaveForm"
          onSubmit={onSubmitApplicationHandler}>
          <div>
            <label htmlFor="text">Leave Type</label>
            <input type="text" ref={leaveTypeRef} />
          </div>
          <div>
            <label htmlFor="Date">From Date</label>
            <input type="date" ref={fromDateRef} />
          </div>
          <div>
            <label htmlFor="date">To Date</label>
            <input type="date" ref={toDateRef} />
          </div>
          <div>
            <label htmlFor="w3review">Reason</label>
            <textarea
              name="w3review"
              rows="4"
              cols="30"
              ref={reasonRef}></textarea>
          </div>
          <div className="sumitleaveForm">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveForm;
