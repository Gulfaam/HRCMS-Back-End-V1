import Payroll from "../models/Payroll.js";

const PayrollService = {
    add: async (body) => {
        try {
            const savedData = await Payroll.create(body);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    getAll: async (limit, skip) => {
        try {
            const data = await Payroll.find().limit(limit).skip(skip);

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    getOne: async (id) => {
        try {
            const data = await Payroll.findById(id);

            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },


    delete: async (id) => {
        try {
            const savedData = await Payroll.findByIdAndDelete(id);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    update: async (id, body) => {
        try {
            const savedData = await Payroll.findByIdAndUpdate(id, body);
            if (savedData) {
                return { message: "success", data: savedData };
            }
            else {
                return { message: "Not Found", data: savedData };

            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },

};

export default PayrollService;
