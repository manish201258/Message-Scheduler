// const cron = require("node-cron");
// const ScheduledMessage = require("./modules/scheduledMessageModel");
// const sendEmail = require("./Controllers/mailer");
// const dbConnect = require("./modules/dbConnect");
// require("dotenv").config();

// async function startCron() {
//   try {
//     await dbConnect(); // Connect to MongoDB before cron starts
//     console.log("✅ Database connected, starting cron job...");

//     // Run every minute instead of every 10 seconds
//     cron.schedule("*/1 * * * *", async () => {
//       try {
//         console.log("🔍 Checking for scheduled messages...");

//         const now = new Date();
//         now.setMilliseconds(0);

//         const messagesToSend = await ScheduledMessage.find(
//           { "receiver.scheduletime": { $lte: now }, status: "scheduled" }
//         ).maxTimeMS(5000) // Prevent long waits
//          .limit(10); // Process in batches

//         if (!messagesToSend.length) {
//           console.log("✅ No messages to send.");
//           return;
//         }

//         for (const message of messagesToSend) {
//           console.log(`📨 Sending message to ${message.receiver.name}: ${message.sender.message}`);

//           const emailSent = await sendEmail(
//             message.receiver.contact,
//             "Project Showcase",
//             message.sender.message
//           );

//           await ScheduledMessage.updateOne(
//             { _id: message._id },
//             { $set: { status: emailSent ? "sent" : "failed" } }
//           );

//           console.log(`✅ Message ${emailSent ? "sent" : "failed"} to ${message.receiver.name}`);
//         }
//       } catch (error) {
//         console.error("❌ Error in processing scheduled messages:", error);
//       }
//     });
//   } catch (error) {
//     console.error("❌ Failed to start cron job:", error);
//   }
// }

// // Start cron job after connecting to DB
// startCron();
