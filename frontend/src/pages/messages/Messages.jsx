import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import moment from "moment";
import UserOrderTd from "../../components/userOrderTd/UserOrderTd";
const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => request.get("/conversations").then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return request.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });
  const handleRead = (id) => {
    mutation.mutate(id);
  };
  return (
    <div className="messages">
      {isLoading ? (
        "loading.."
      ) : error ? (
        "error!"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((conversation) => (
                <tr
                  className={
                    (currentUser.isSeller && !conversation.readBySeller) ||
                    (!currentUser.isSeller && !conversation.readByBuyer)
                      ? "read"
                      : ""
                  }
                  key={conversation.id}
                >
                  <UserOrderTd
                    id={
                      currentUser.isSeller
                        ? conversation.buyerId
                        : conversation.sellerId
                    }
                  />
                  <td>
                    <Link to={`/message/${conversation.id}`} className="link">
                      {conversation?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(conversation.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !conversation.readBySeller) ||
                      (!currentUser.isSeller && !conversation.readByBuyer)) && (
                      <button onClick={() => handleRead(conversation.id)}>
                        Mark as Read
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
