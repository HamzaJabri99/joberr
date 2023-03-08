import jwt from "jsonwebtoken";
import errorHandle from "../utils/errorHandle.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(errorHandle(401, "you're not authenticated"));
  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(errorHandle(403, "You're not authorized"));
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
