import PayrollService from "../../services/payroll.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
    add: async (req, res) => {
        const addResponse = await PayrollService.add(req.body);
        if (addResponse.message === "success") {
            return httpResponse.CREATED(res, addResponse.data);
        } else if (addResponse.message === "failed") {
            return httpResponse.CONFLICT(res, addResponse.data);
        } else {
            return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
        }
    },
    getAll: async (req, res) => {
        try {
            const data = await PayrollService.getAll();
            return httpResponse.SUCCESS(res, data.data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    getOne: async (req, res) => {
        try {
            const data = await PayrollService.getOne(req.params.id);
            return httpResponse.SUCCESS(res, data.data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
};

export default controller;
