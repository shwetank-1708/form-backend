const express = require("express");
const cors = require("cors");
const app = express();
require("./conn/conn");
const contact = require("./routes/contact");
app.use(express.json());
app.use(cors());

app.use("/api/v1", contact);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen("1000", () => {
  console.log("Server Started at port 1000");
});
