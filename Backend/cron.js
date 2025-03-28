const cron = require("node-cron");
const ScheduledMessage = require("./modules/scheduledMessageModel");
const sendEmail = require("./Controllers/mailer");
require("dotenv").config();

cron.schedule("*/10 * * * * *", async () => {
  try {
    const now = new Date();
    now.setMilliseconds(0);

    const messagesToSend = await ScheduledMessage.find({
      "receiver.scheduletime": { $lte: now },
      status: "scheduled",
    });

    for (const message of messagesToSend) {
      console.log(`Sending message to ${message.receiver.name}: ${message.sender.message}`);

      const emailSent = await sendEmail(
        message.receiver.contact,
        "Project Showcase",
        message.sender.message
      );

      await ScheduledMessage.updateOne(
        { _id: message._id },
        { $set: { status: emailSent ? "sent" : "failed" } }
      );

      console.log(`Message ${emailSent ? "sent successfully" : "failed to send"} to ${message.receiver.name}`);
    }
  } catch (error) {
    console.error("Error in processing scheduled messages:", error);
  }
});
