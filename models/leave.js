import mongoose from "mongoose";
const Schema = mongoose.Schema;

const leaveSchema =Schema({
    leave_type: {
        type:String,
        required:true
    },
    start_date: {
        type: Date,
        required: true
      },
      end_date: {
        type: Date,
        required: true
      },
      count: {
        type: Number,
        required: true
      },
      reason: {
        type: String,
        required: true
      }
})

export default mongoose.model('leave', leaveSchema);