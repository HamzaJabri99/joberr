import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import request from "../../utils/request";
import CheckoutForm from "../../components/checkoutForm/CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51M9XSBGogcCZVVw2eAYas6fFqi1nVHfuL8SyLq5lls8NYRlviRLAq2JDOrp8QkPwPZd9PN4WU007Zm5MxcDH5VrC00QuIboNbk"
);
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await request.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };
    makeRequest();
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="pay">
      {" "}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
