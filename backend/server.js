const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Message = require("./models/Message");

// API
app.post("/api/contact", async (req, res) => {
  const msg = new Message(req.body);
  await msg.save();
  res.send({ status: "success" });
});

app.get("/api/messages", async (req, res) => {
  const data = await Message.find();
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});