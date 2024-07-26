const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = async () => {
  try {
    console.log("Connecting to DB.....");
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connection successfull.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToMongo;
