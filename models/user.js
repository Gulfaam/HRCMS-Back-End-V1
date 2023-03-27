import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  email: { type: String, required: true, maxlength: 50 },
  password: { type: String, required: true, maxlength: 50 },
});
export default mongoose.model("User", schema);
