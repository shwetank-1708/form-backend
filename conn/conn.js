const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://shwetank17:1234@cluster0.rntmr.mongodb.net/contact"
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
