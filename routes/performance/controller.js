import PerformanceService from "../../services/performance.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    const addResponse = await PerformanceService.add(req.body);
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
      const data = await PerformanceService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getOne: async (req, res) => {
    try {
      const data = await PerformanceService.getOne(req.params.id);
      if (data.message === "success") {
        return httpResponse.SUCCESS(res, data.data);
      } else {
        return httpResponse.NOT_FOUND(res, data.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const addResponse = await PerformanceService.update(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse);
      } else {
        return httpResponse.NOT_FOUND(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  delete: async (req, res) => {
    try {
      const addResponse = await PerformanceService.delete(req.params.id);
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
};

export default controller;
