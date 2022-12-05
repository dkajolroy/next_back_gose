import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, default: "" },
    dataOfBirth: { type: Date, required: true },
  },
  { timestamps: true }
);

const mongo = mongoose.models.users || mongoose.model("users", userSchema);
export default mongo;
