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
};

export default PayrollService;
