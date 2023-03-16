import Gig from "../models/gig.model.js";
import Order from "../models/order.model.js";
import errorHandle from "../utils/errorHandle.js";
import Stripe from "stripe";
// export const createOrder = async (req, res, next) => {
//   try {
//     const gig = await Gig.findById(req.params.gigId);
//     const order = new Order({
//       gigId: gig._id,
//       img: gig.cover,
//       title: gig.title,
//       buyerId: req.userId,
//       sellerId: gig.userId,
//       price: gig.price,
//       payment_intent: "Temporary",
//     });
//     if (gig.userId === req.userId)
//       return next(errorHandle(403, "You can't order to yourself"));
//     await order.save();
//     res.status(200).send("successful order");
//   } catch (error) {
//     next(error);
//   }
// };
export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  const gig = await Gig.findById(req.params.id);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const order = new Order({
    gigId: gig._id,
    img: gig.cover,
    title: gig.title,
    buyerId: req.userId,
    sellerId: gig.userId,
    price: gig.price,
    payment_intent: paymentIntent.id,
  });
  if (gig.userId === req.userId)
    return next(errorHandle(403, "You can't order to yourself"));
  await order.save();
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};
export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    if (!orders) return next(errorHandle(404, "there are no orders!"));
    return res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
