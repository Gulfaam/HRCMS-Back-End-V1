import UserService from "../../services/user.js";
import httpResponse from "../../utils/httpResponse.js";
const controller = {
  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await UserService.getById(req.params.abc);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
      const data = await UserService.signup(req.body);
      const code = await CodeService.generate({
        user_id: data._id,
        intent: CodeVerificationUnProtectedIntents.REGISTRATION,
      });
      MessageService.sendEmail({
        message: `your code is ${code.code}`,
        to: req.body.email,
        subject: "Verify You Email",
      });
      res.status(201).json({ message: "user registered" });
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  update: async (req, res) => {
    const addResponse = await UserService.update(req.params.id, req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  delete: async (req, res) => {
    const addResponse = await UserService.delete(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },
};

export default controller;
