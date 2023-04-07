import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
       leave_type: {
          type: String,
          required: true
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
          required: true,
          min: 1
        },
        attachment: {
          type: String,
          required:true
        },
        reason: {
          type: String,
          required: true
        }
      
});
export default mongoose.model("LeaveRequest", schema);
