import React from "react";
import "./Messages.scss";
import { Link } from "react-router-dom";
const Messages = () => {
  const currentUser = {
    id: 3,
    username: "hamza doe",
    isSeller: false,
  };
  const message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  Nesciunt beatae alias delectus, possimus suscipit voluptas
  accusantium quas eum et dignissimos, dolores fugit sit facilis
  hic rerum nobis perspiciatis. Eaque, ullam.`;
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="read">
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="read">
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>3 hours ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>3 days ago</td>
          </tr>
          <tr>
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 week ago</td>
          </tr>
          <tr>
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 week ago</td>
          </tr>
          <tr>
            <td>Giorno Giovanna</td>
            <td>
              <Link to="/message/2" className="link">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 month ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
