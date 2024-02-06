const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
 const uri = "mongodb+srv://avinashraj:abhi2024@cluster0.imd9rn9.mongodb.net/kg?retryWrites=true&w=majority";

 try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`MongoDB Atlas connected ${mongoose.connection.host}`.bgGreen.white);
 } catch (error) {
    console.log(`MongoDB Server Issue ${error}`.bgRed.white);
 }
};

module.exports = connectDB;
