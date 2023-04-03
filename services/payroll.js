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
    getAll: async () => {
        try {
            const data = await Payroll.find();

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
};

export default PayrollService;
