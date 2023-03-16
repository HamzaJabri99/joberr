import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import request from "../../utils/request";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await request.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  return (
    <div>
      Successful Payment. Please do not close your page you're being redirected
      to the orders page
    </div>
  );
};

export default Success;
