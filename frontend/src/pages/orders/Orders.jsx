import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import UserOrder from "../../components/userOrderTd/UserOrderTd";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const location = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => request.get("/orders").then((res) => res.data),
  });
  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    try {
      const res = await request.get(`/conversations/${id}`);
      location(`/message/${res.data.id}`);
    } catch (error) {
      if (error.response.status === 404) {
        const res = await request.post("/conversations/", {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        location(`/message/${res.data.id}`);
      }
    }
  };
  return (
    <div className="orders">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order._id}>
                  <td>
                    <img src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <UserOrder
                    id={currentUser.isSeller ? order.buyerId : order.sellerId}
                  />
                  <td>
                    <img
                      src="/imgs/message.png"
                      className="message"
                      alt=""
                      onClick={() => handleContact(order)}
                    />
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

export default Orders;
