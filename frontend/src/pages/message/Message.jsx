import React from "react";
import "./Message.scss";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import request from "../../utils/request";
import UserMessageImg from "../../components/UserMessageImg/UserMessageImg";
const Message = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: [`messages`],
    queryFn: () => request.get(`/messages/${id}`).then((res) => res.data),
  });
  const mutation = useMutation({
    mutationFn: (message) => {
      return request.post("/messages", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]); //refetch our messages if the op successful
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const conversationId = id;
    if (desc.length < 3 || conversationId.length === 0) return false;

    mutation.mutate({ desc, conversationId });
    e.target[0].value = "";
  };
  return (
    <div className="message">
      <div className="container">
        <span className="breadCrumbs">
          <Link to={"/messages"} className="link">
            MESSAGES {">"} Jotaro Kujo
          </Link>
        </span>
        {isLoading ? (
          "loading..."
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((msg) => (
              <div
                className={
                  currentUser._id === msg.userId ? "item owner" : "item"
                }
                key={msg._id}
              >
                <UserMessageImg id={msg.userId} />
                <p>{msg.desc}</p>
              </div>
            ))}
          </div>
        )}

        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea
            name=""
            placeholder="write a message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
