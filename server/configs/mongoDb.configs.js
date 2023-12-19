const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const connectToMongoDB = () => {
  mogoose.connect("mongodb://localhost:27017/db_survey");
  const connection = mongoose.connection;
  connection.on("error", (error) => {
    console.log("Error connection to MongoDB: ", error);
  });

  connection.once("open", () => {
    console.log("Connected to MongoDB...");
  });
};

module.exports = { connectToMongoDB };
