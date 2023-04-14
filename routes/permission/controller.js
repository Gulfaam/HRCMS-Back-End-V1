import PermissionService from "../../services/permission.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    const addResponse = await PermissionService.create(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  getById: async (req, res) => {
    const addResponse = await PermissionService.getById(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  getAll: async (req, res) => {
    const addResponse = await PermissionService.findByFilter(req.query);
    return httpResponse.SUCCESS(res, addResponse);
  },

  update: async (req, res) => {
    const addResponse = await PermissionService.update(req.params.id, req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  delete: async (req, res) => {
    const addResponse = await PermissionService.delete(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.SUCCESS(res, addResponse.data);
    } else if (addResponse.message === "error") {
      return httpResponse.NOT_FOUND(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },
};
export default controller;
