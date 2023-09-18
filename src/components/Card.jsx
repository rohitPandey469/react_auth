import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardInfo }) => {
  return (
    <div style={{ display: "flex", border: "1px solid red" ,}}>
      <div>
        <img src={cardInfo.fields.image.stringValue} alt="" />
        <Link to={cardInfo.fields.link.stringValue}>link</Link>
        <p>{cardInfo.fields.description.stringValue}</p>
      </div>
    </div>
  );
};

export default Card;
