import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import request from "../../utils/request";
import UserOrder from "../../components/userOrderTd/UserOrderTd";
const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => request.get("/orders").then((res) => res.data),
  });

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
                    <img src="/imgs/message.png" className="message" alt="" />
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
