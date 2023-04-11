import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema(
  {
    title: { type: String, required: true, maxlength: 50 },
    description: { type: String, required: true, maxlength: 300 },
    estimated_expence: {
      type: Schema.Types.Number,
      required: true,
      maxlength: 10,
    },
    final_expence: { type: Schema.Types.Number, required: true, maxlength: 10 },
    venue: { type: String, required: true, maxlength: 50 },
    status: {
      type: String,
      enum: [
        "draft",
        "pending",
        "approved",
        "cancelled",
        "postponed",
        "upcoming",
        "in progress",
        "completed",
      ],
      required: true,
    },
    created_by_id: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    management_ids: [
      { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    ],
    participant_ids: [
      { type: Schema.Types.ObjectId, ref: "Employee", required: true },
    ],
  },
  { timestamps: true }
);
export default mongoose.model("Event", schema);
