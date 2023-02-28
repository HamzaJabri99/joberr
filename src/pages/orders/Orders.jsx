import React from "react";
import "./Orders.scss";
const Orders = () => {
  const currentUser = {
    id: 3,
    username: "hamza doe",
    isSeller: false,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?"Buyer":"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai Generated Image</td>
            <td>59.99</td>
            <td>10</td>
            <td>
              <img src="/imgs/message.png" className="message" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
