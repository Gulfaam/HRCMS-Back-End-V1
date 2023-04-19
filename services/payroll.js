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
    getAll: async (limit, skip, query) => {
        try {
            const sort = {};
            if (query.sort) {
                if (typeof query.sort === "object") {
                    query.sort.forEach((element) => {
                        if (element.startsWith("-")) {
                            sort[element.substring(1)] = -1;
                        } else {
                            sort[element] = 1;
                        }
                    });
                } else {
                    if (query.sort.startsWith("-")) {
                        sort[query.sort.substring(1)] = -1;
                    } else {
                        sort[query.sort] = 1;
                    }
                }
            }
            const data = await Payroll.find(query).limit(limit).skip(skip).sort(sort);
            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    getOneById: async (id) => {
        try {
            const data = await Payroll.findById(id);
            return { message: "success", data };
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    deleteOneById: async (id) => {
        try {
            const savedData = await Payroll.findByIdAndDelete(id);
            if (savedData) {
                return { message: "success", data: savedData };
            }
        } catch (error) {
            return { message: "error", data: error.message };
        }
    },
    updateOneById: async (id, body) => {
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
