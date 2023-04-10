import EmployeeServices from "../../services/employee.js"
import httpResponse from "../../utils/httpResponse.js";

const controller = {
    getAll: async (req, res) => {
        try {
            const data = await EmployeeServices.getAll();
            console.log(data);
            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
    },
    getOne: async (req, res) => {
        try {
            const data = await EmployeeServices.getOne(req.params.id);
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
    },

    update: async (req, res) => {
        let addResponse;
        if (req.file) {
            addResponse = await EmployeeServices.update(req.params.id, req.body, req.file.path);
        } else {
            addResponse = await EmployeeServices.update(req.params.id, req.body);
        }
        if (addResponse.message === "success") {
            return httpResponse.SUCCESS(res, addResponse.data);
        } else {
            return httpResponse.NOT_FOUND(res, addResponse.data);
        }
    },
}

export default controller;
