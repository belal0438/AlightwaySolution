import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "./card";
import "./cardContainer.css";

const CardContainer = () => {
  const authcxt = useContext(AuthContext);
  let cardData;
  if (authcxt.RequestApplication.length != 0) {
    cardData = authcxt.RequestApplication[
      authcxt.RequestApplication.length - 1
    ].map((ele) => (
      <Card
        key={ele._id}
        id={ele._id}
        leaveType={ele.leaveType}
        // email={ele.employId.email}
        fromDate={ele.fromDate}
        toDate={ele.toDate}
        reason={ele.reason}
        status={ele.status}
      />
    ));
  } else {
    cardData = <p>No Application available</p>;
  }
  return (
    <div>
      <div className="allCardContainer">{cardData}</div>
    </div>
  );
};

export default CardContainer;
