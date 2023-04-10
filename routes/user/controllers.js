import UserService from "../../services/user.js";
import httpResponse from "../../utils/httpResponse.js";
const controller = {

  register: async (req, res) => {
    const addResponse = await UserService.register(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  forgetpassword: async (req, res) => {
    try {
      const addResponse = await UserService.forgetpassword(req.body);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse);
      } else {
        return httpResponse.UNAUTHORIZED(res, addResponse.data);
      }
    }
    catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  login: async (req, res) => {
    try {
      const addResponse = await UserService.login(req.body);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse);
      } else {
        return httpResponse.UNAUTHORIZED(res, addResponse.data);
      }
    }
    catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getAll: async (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const skip = parseInt(req.query.skip) || 0;
      const data = await UserService.getAll(limit, skip, req.query);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const addResponse = await UserService.update(req.params.id, req.body, { new: true });
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const addResponse = await UserService.delete(req.params.id);
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
}

export default controller;
