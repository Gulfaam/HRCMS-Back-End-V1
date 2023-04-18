import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = Schema({
  parameter: {
    type: String,
    required: true,
    maxlength: 50,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  remarks: {
    type: String,
    maxlength: 500,
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
    maxlength: 24,
  },
  created_by_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
    maxlength: 24,
  },
  updated_by_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
    maxlength: 24,
  },
});
export default mongoose.model("Performance", schema);
