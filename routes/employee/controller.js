import EmployeeServices from "../../services/employee.js"
import httpResponse from "../../utils/httpResponse.js";

const controller = {
    getAll: async (req, res) => {
        try {
            const data = await EmployeeServices.getAll();
            return httpResponse.SUCCESS(res, data.data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },

    add: async (req, res) => {

        const addResponse = await EmployeeServices.add(req.body, req.file.path);
        if (addResponse.message === "success") {
            return httpResponse.CREATED(res, addResponse.data);
        } else if (addResponse.message === "failed") {
            return httpResponse.CONFLICT(res, addResponse.data);
        } else {
            return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
        }
    },

    delete: async (req, res) => {
        try {
            const addResponse = await EmployeeServices.delete(req.params.id);
            return httpResponse.SUCCESS(res, addResponse.data);
        } catch (error) {
            return httpResponse.NOT_FOUND(res, error);
        }
        // if (addResponse.message === "success") {
        //     return httpResponse.CREATED(res, addResponse.data);
        // } else if (addResponse.message === "failed") {
        //     return httpResponse.CONFLICT(res, addResponse.data);
        // } else {
        //     return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
        // }
    },

    update: async (req, res) => {
        const addResponse = await EmployeeServices.update(req.params.id, req.body);
        if (addResponse.message === "success") {
            return httpResponse.CREATED(res, addResponse.data);
        } else if (addResponse.message === "failed") {
            return httpResponse.CONFLICT(res, addResponse.data);
        } else {
            return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
        }
    },

}

export default controller;
