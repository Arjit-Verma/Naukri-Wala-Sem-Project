import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["student", "college", "company"],
    required: true,
  },
  college: {
    type: String,
    required: function () {
      return this.role === "student";
    },
  },
  name: { type: String, required: true },
  year: {
    type: String,
    required: function () {
      return this.role === "student";
    },
  },
});

export default mongoose.model("User", UserSchema);
