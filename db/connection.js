const mongoose = require("mongoose");

// const {getConfig} = require("../config")
// const url = getConfig().url

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
  
};
module.exports = connectMongo ;
