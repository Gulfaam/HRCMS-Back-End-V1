
import hierarchy from "../../services/hierarchy.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    const addResponse = await hierarchy.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  get: async (req, res) => {
    const addResponse = await hierarchy.get(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await hierarchy.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
}

export default controller;
