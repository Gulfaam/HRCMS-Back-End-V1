import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = Schema(
  {
    type: {
      type: String,
      enum: ["employee", "company"],
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 100,
    },
    cost: {
      type: Double,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total_cost: {
      type: Double,
      required: true,
    },
    description: {
      type: String,
      maxlength: 200,
    },
    created_date: {
      type: Date,
      required: true,
    },
    updated_date: {
      type: Date,
      required: true,
    },
    employee_id: {
      type: String,
      required: true,
      maxlength: 50,
    },
  }
  // { timestamps: true },
);
export default mongoose.model("Misc", schema);
