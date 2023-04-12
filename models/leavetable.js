import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    type: {
        type: String,
        required: true,
        maxlength: 50
      },
      employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
      },
      balance: {
        type: Number,
        required: true
      },
      availed: {
        type: Number,
        required: true
      },
      available: {
        type: Number,
        required: true
      },
      pending: {
        type: Number,
        required: true
      },
});
export default mongoose.model("Leave", schema);
