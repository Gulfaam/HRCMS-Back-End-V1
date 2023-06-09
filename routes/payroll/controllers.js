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
            const limit = parseInt(req.query.limit) || 10;
            const skip = parseInt(req.query.skip) || 0;
            const data = await PayrollService.getAll(limit, skip, req.query);
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
    delete: async (req, res) => {
        try {
            const addResponse = await PayrollService.delete(req.params.id);
            return httpResponse.SUCCESS(res, addResponse.data);
        } catch (error) {
            return httpResponse.NOT_FOUND(res, error);
        }
    },
    update: async (req, res) => {
        try {
            const addResponse = await PayrollService.update(req.params.id, req.body, { new: true });
            if (addResponse.message === "success") {
                return httpResponse.SUCCESS(res, addResponse.data);

            } else {
                return httpResponse.NOT_FOUND(res, addResponse.data);
            }
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
};

export default controller;
