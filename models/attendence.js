import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = Schema({
    time_in: { 
    type: String, 
    required: true, 
    },
    time_out:{
    type: String, 
    required: true,
    },
    status: {
    type: String,
    enum: ['present', 'absent', 'leave', 'late'],
    required: true,
    },
    date:{
        type: Date,
        required: true
    },
    updated_date:{
        type: Date,
        required: true
    },
    remarks:{
        type: String,
        maxlength: 250,
    },
    monthly_hours:{
        type: Number,
        required: true
    },
},
// { timestamps: true },
);
export default mongoose.model("Attendence", schema);
