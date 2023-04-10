import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      maxlength: 50,
    },
    stack: {
      type: String,
      required: true,
      maxlength: 50,
    },
    contract: {
      type: String,
      required: true,
      maxlength: 500,
    },
    salary_range: {
      type: String,
      required: true,
      maxlength: 50,
    },
    experience_required: {
      type: String,
      required: true,
      maxlength: 200,
    },
    applicant_ids: {
      type: mongoose.Schema.Types.ObjectId,
      //	required: true,
      maxlength: 200,
      ref: "Employee",
    },
    interviewers_ids: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true,
      maxlength: 200,
      ref: "Employee",
    },
    selected_candidate_id: {
      type: mongoose.Schema.Types.ObjectId,
      //required: true,
      maxlength: 200,
      ref: "Employee",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", schema);
