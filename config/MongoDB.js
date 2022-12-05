import mongoose from "mongoose";

const mongoConnect = () => {
  //process.env.MONGO_URI
  if (mongoose.connection.readyState) {
    return false;
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connect success"))
    .catch((error) => console.log("Error connecting"));
};

export default mongoConnect;
