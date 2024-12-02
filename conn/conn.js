const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://shwetankchauhan17:4IQQvcSA286uDTpi@cluster0.g2p2i.mongodb.net/contact"
      )
      .then(() => {
        console.log("Connected");
      }),
      (error) => {
        console.log(error);
      };
  } catch (error) {
    console.log(error);
  }
};

conn();
