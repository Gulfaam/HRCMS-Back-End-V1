import mongoose from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

export default mongoose.model("Permission", schema);
