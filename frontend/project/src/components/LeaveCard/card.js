import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="mainCarContainer">
      <div>
        <h2>
          <span className="spanwithAtrr">Email</span>:{" "}
          <span>mohd@gmail.com</span>
        </h2>
      </div>
      <div>
        <p>
          <span className="spanwithAtrr">Leave Type</span> :{" "}
          <span>vacation</span>
        </p>
      </div>
      <div>
        <p className="spanwithAtrr">Date</p>
        <span>From: 20-11-4</span>
        <span className="toDateSpane">To: 20-11-4</span>
      </div>
      <div>
        <p className="spanwithAtrr">reason</p>
        <span>these is oure first vacation leave </span>
      </div>
      <div>
        <p>
          <span className="spanwithAtrr">Status</span> :
          <span className="statusSpane">pending</span>
        </p>
      </div>

      {/* <div>
        <p className="spanwithAtrr">Status</p>
        <div className="statusBtn">
          <button>Accepted</button>
          <button>Rejcted</button>
        </div>
      </div> */}
    </div>
  );
};

export default Card;
