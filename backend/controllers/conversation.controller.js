import Conversation from "../models/conversation.model.js";
import errorHandle from "../utils/errorHandle.js";

export const createConversation = async (req, res, next) => {
  const conversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    buyerId: req.isSeller ? req.body.to : req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });
  try {
    const newConversation = await conversation.save();
    res.status(201).send(newConversation);
  } catch (error) {
    next(error);
  }
};
export const updateConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
        },
      },
      { new: true }
    );
    res.status(200).send(conversation);
  } catch (error) {
    next(error);
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation)
      return next(errorHandle(404, "no conversation was found"));
    return res.status(200).send(conversation);
  } catch (error) {
    next(error);
  }
};
export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId })
    );
    if (!conversations)
      return next(errorHandle(404, "no conversation was found"));
    return res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
};
