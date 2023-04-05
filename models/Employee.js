
import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    role: {
        type: String,
        enum: ['HR', 'Developer', 'Project Manager', 'Office Boy'],
        required: true,
    },
    contact: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {

        type: String,
        required: true,
        maxlength: 50,
    },
    address: {
        type: String,
        required: true,
        maxlength: 50,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        required: true
    },
    cnic: {
        type: String,
        required: true,
        maxlength: 50,
    },
    joining_date: {
        type: Date,
        required: true
    },
    ending_date: {
        type: Date,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true,
    },

    date_of_birth: {
        type: String,
        required: true,
    },
    blood_group: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
})

export default mongoose.model('Employee', employeeSchema)