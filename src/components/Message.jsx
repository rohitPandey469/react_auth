import React from "react";
import user from "../assets/Ellipse 3.svg";
import robot from "../assets/Ellipse 2.svg";

const Message = ({ title, description }) => {
  const Avatar = title === "bot" ? "robot" : "user";
  window.scrollTo(0, document.body.scrollHeight);

  return (
    <div>
      <p
        style={{ display: "flex" }}
        className={title === "bot" ? "user chatbot-p" : "user_msg chatbot-p"}
      >
        {title === "bot" ? (
          <img
            style={{
              width: "30px",
              alignSelf: "flex-start",
              marginTop: "10px",
            }}
            src={robot}
          />
        ) : (
          <img
            style={{
              width: "30px",
              alignSelf: "flex-start",
              marginTop: "10px",
            }}
            src={user}
          />
        )}
        <span style={{ color: "black" }}>{description}</span>
      </p>
    </div>
  );
};

export default Message;
