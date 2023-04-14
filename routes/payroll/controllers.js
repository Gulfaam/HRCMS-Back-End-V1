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
    getOneById: async (req, res) => {
        try {
            const data = await PayrollService.getOneById(req.params.id);
            return httpResponse.SUCCESS(res, data.data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    deleteOneById: async (req, res) => {
        try {
            const addResponse = await PayrollService.deleteOneById(req.params.id);
            return httpResponse.SUCCESS(res, addResponse.data);
        } catch (error) {
            return httpResponse.NOT_FOUND(res, error);
        }
    },
    updateOneById: async (req, res) => {
        try {
            const addResponse = await PayrollService.updateOneById(req.params.id, req.body, { new: true });
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
