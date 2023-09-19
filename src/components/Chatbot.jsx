import React, { useEffect, useState } from "react";
import { textQueryAction, eventQueryAction } from "../actions/queries";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Card from "./Card";
import Navbar from "./Navbar";
import robot from "../assets/Ellipse 2.svg";

const Chatbot = () => {
  // useEffect(() => {
  //   eventQuery("welcomeToMyBot");
  // }, []);

  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dispatch = useDispatch();

  // with the help of redux toolkit - pulling out the data from redux
  const msgs = useSelector((state) => state?.queriesReducer.messages);
  useEffect(() => {
    let scrollH = document.body.scrollHeight - 60;
    window.scrollTo(0, scrollH);
  }, [msgs]);
  useEffect(() => {
    setIsTyping(false);
  }, [msgs.length]);

  const textQuery = async (text) => {
    // called an action
    setIsTyping(true);
    dispatch(textQueryAction(text));
  };

  const eventQuery = async (event) => {
    // called an action
    setIsTyping(true);
    dispatch(eventQueryAction(event));
  };

  const handleSubmit = (e) => {
    setIsTyping(true);
    e.preventDefault();
    if (text == "") {
      return alert("Type something first");
    } else {
      // send request to text query route
      textQuery(text);
    }
    setText("");
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} cardInfo={card.structValue} />);
  };

  const renderOneMsg = (msg, i) => {
    // we need some condn to separate msgs kind

    // template for normal text
    if (msg.content && msg.content.text && msg.content.text.text) {
      return (
        <Message key={i} title={msg.who} description={msg.content.text.text} />
      );
    }
    // template for card or custom payload
    else if (
      msg.content &&
      msg.content.payload &&
      msg.content.payload.fields.card
    ) {
      return (
        <div>
          {renderCards(msg.content.payload.fields.card.listValue.values)}
        </div>
      );
    }
  };

  const renderMsg = (msgs) => {
    if (msgs) {
      return msgs.map((msg, i) => {
        return renderOneMsg(msg, i);
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="navbar-rectangle">
          <img className="robot-img" src={robot} alt="" />
          <p className="your-own-doctor">Your own doctor</p>
        </div>
        <section style={{ marginBottom: "1rem" }}>{renderMsg(msgs)}</section>
        {/* <div className={isTyping ? "" : "hide"}>
          <p className="chatbot-p">
            <i>{isTyping ? "Typing" : ""}</i>
          </p>
        </div> */}
        <form
          style={{
            minWidth: "100vw",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              height: "4rem",
              width: "37%",
            margin: "5px auto",

            }}
            className="chat-page-input"
            class="form-input chat-page-input"
            placeholder="Type your message here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
          />
        </form>
      </main>
    </>
  );
};

export default Chatbot;
