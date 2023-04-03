import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = Schema({
    basic_pay: {
        type: Number,
        required: true,
    },
    allowance: {
        type: Number,
        required: true,
    },
    loan: {
        type: Number,
        required: true,
    },
    increments_ids: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Increment",
        required: true
    },
    current_salary: {
        type: Number,
        required: true
    },
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
    issuer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true
    },
},
);
export default mongoose.model("Payroll", schema);
