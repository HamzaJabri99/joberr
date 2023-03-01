import React from "react";
import "./Message.scss";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to={"/messages"} className="link">MESSAGES {">"} Jotaro Kujo</Link>
        </span>
        <div className="messages">
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/75950318?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              eveniet provident quibusdam velit ab dolorum nostrum quis
              temporibus, ratione nesciunt aut aperiam maiores repudiandae eos
              architecto a ullam facere! Consequuntur.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://avatars.githubusercontent.com/u/75950318?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              eveniet provident quibusdam velit ab dolorum nostrum quis
              temporibus, ratione nesciunt aut aperiam maiores repudiandae eos
              architecto a ullam facere! Consequuntur.
            </p>
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/75950318?v=4"
              alt=""
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              eveniet provident quibusdam velit ab dolorum nostrum quis
              temporibus, ratione nesciunt aut aperiam maiores repudiandae eos
              architecto a ullam facere! Consequuntur.
            </p>
          </div>
          
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
