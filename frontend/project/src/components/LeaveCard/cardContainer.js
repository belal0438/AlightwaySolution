import React from "react";
import Card from "./card";
import "./cardContainer.css";

const CardContainer = () => {
  return (
    <div>
      <div className="allCardContainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
