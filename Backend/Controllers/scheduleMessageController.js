const ScheduledMessage = require("../modules/scheduledMessageModel");

const scheduleMessage = async (req, res) => {
  try {
    const { sender, receiver } = req.body;

    const newMessage = new ScheduledMessage({
      sender,
      receiver
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: "Message scheduled successfully!" });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = scheduleMessage;