const mongoose = require("mongoose"); 

const connectDb = async () => {
  try { 
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected");  
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

module.exports = connectDb;
