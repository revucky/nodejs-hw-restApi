require("dotenv").config();
const app = require("./app");
const connectMongo = require("./db/connection");


const start = async () => {
  try {
    await connectMongo();
    app.listen(process.env.PORT, () => {
    console.log("Server running. Use our API on port: 4000");
  });
  } catch (error) {
    console.log(error.message);
  }
  
  
};
start()
// module.exports = start;
