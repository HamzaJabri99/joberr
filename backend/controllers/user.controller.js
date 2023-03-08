import User from "../models/user.model.js";
import errorHandle from "../utils/errorHandle.js";
export const getUser = (req, res) => {
  res.send("works as a charm");
};
export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString())
    return next(errorHandle(403, "You're not authorized!"));
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).send("deleted successfully!");
};
