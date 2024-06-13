import React from "react";
import "./leaveForm.css";

const LeaveForm = () => {
  return (
    <div className="usermainFormcontainer">
      <div className="usercontainer">
        <h2>Leave application Form</h2>
        <form action="" className="leaveForm">
          <div>
            <label htmlFor="text">Leave Type</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="Date">From Date</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="date">To Date</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="w3review">Reason</label>
            <textarea name="w3review" rows="4" cols="30"></textarea>
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
