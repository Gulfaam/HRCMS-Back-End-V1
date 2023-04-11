import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HieracrchySchema =Schema({
    created_date: {
        type: Date,
        required: true,
    },
    updated_date: {
        type: Date,
        required: true,
    },
    employee_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required:true
    },
    team_lead_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
})

export default mongoose.model('Hierarchy', HieracrchySchema);