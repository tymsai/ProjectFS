const mongoose = require("mongoose");

const chatroom = new mongoose.Schema(
  {
    friendrequestsender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true
    },
    senderusername:{
      type: String,
      required: true
    },
    receiverusername: {
      type: String,
      required: true
    },
    friendrequestreceiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel',
      required: true
    }
  },
  { timestamps: true }
);

module.exports=mongoose.model("ChatRoomModel", chatroom)