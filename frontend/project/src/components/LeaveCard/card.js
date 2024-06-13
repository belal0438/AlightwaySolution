import React, { useContext } from "react";
import "./card.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const Card = (props) => {
  const authcxt = useContext(AuthContext);

  const token = authcxt.token;
  if (!token) {
    alert("User not logged in");
  }

  const approveClick = async (id) => {
    const result = await axios.put(
      `http://localhost:4000/api/v1/leave/application/${id}`,
      { status: "Approved" },
      { headers: { Authorization: token } }
    );

    console.log("resultApprove", result.response.status);
  };

  const rejectClick = async (id) => {
    const result = await axios.put(
      `http://localhost:4000/api/v1/leave/application/${id}`,
      { status: "Rejected" },
      { headers: { Authorization: token } }
    );

    console.log("resultRejected", result.response.status);
  };

  return (
    <div className="mainCarContainer">
      <div>
        <h2>
          {/* {props.email} */}
          <span className="spanwithAtrr">Email</span>:<span>email.com</span>
        </h2>
      </div>
      <div>
        <p>
          <span className="spanwithAtrr">Leave Type</span> :
          <span>{props.leaveType}</span>
        </p>
      </div>
      <div>
        <p className="spanwithAtrr">Date</p>
        <span>From: {props.fromDate}</span>
        <span className="toDateSpane">To: {props.toDate}</span>
      </div>
      <div>
        <p className="spanwithAtrr">reason</p>
        <span>{props.reason} </span>
      </div>
      <div>
        <p>
          <span className="spanwithAtrr">Current status</span> :
          <span className="statusSpane">{props.status}</span>
        </p>
      </div>

      <div>
        <p className="spanwithAtrr">Status</p>
        <div className="statusBtn">
          <button onClick={() => approveClick(props.id)}>Approved</button>
          <button onClick={() => rejectClick(props.id)}>Rejected</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
