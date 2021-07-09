const asyncHandler = require("express-async-handler");
const Message = require("../Models/MessageModel");

exports.sendMessage = asyncHandler(async(req,res,next) => {
    const newMessage = await Message.create(req.body)
    res.status(201).json({success: {newMessage}})
})