import Conversation from "../models/conversation.model";
import Message from "../models/message.model";
import errorHandle from "../utils/errorHandle";

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ conversationId: req.params.convId });

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};

export const createMessage = async (req, res, next) => {
  const message = new Message({
    userId: req.userId,
    conversationId: req.body.conversationId,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await message.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.desc,
        },
      },
      { new: true }
    );
    if (!savedMessage) return res(errorHandle(500, "Message can't be sent"));
    res.status(201).send(savedMessage);
  } catch (error) {
    next(error);
  }
};
