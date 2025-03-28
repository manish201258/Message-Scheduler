const mongoose = require("mongoose");

const scheduledMessageSchema = new mongoose.Schema({
  sender: {
    message: { type: String, required: true }
  },
  receiver: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    scheduletime: { type: Date, required: true }
  },
  status: { 
    type: String, 
    enum: ["scheduled", "sent", "failed"], 
    default: "scheduled" 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Model
const ScheduledMessage = mongoose.model("ScheduledMessage", scheduledMessageSchema);

module.exports = ScheduledMessage;
