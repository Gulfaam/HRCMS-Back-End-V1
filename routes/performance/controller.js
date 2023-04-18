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
  addMultiple: async (req, res) => {
    const addResponse = await PerformanceService.addMultiple(
      req.body.bulk_performance
    );
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
      const limit = parseInt(req.query.limit) || 5;
      const skip = parseInt(req.query.skip) || 0;
      const addResponse = await PerformanceService.getAll(limit, skip, req.query);
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getOneById: async (req, res) => {
    try {
      const addResponse = await PerformanceService.getOneById(req.params.id);
      if (data.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.NOT_FOUND(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  updateOneById: async (req, res) => {
    try {
      const addResponse = await PerformanceService.updateOneById(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
  deleteOneById: async (req, res) => {
    try {
      const addResponse = await PerformanceService.deleteOneById(req.params.id);
      if (addResponse.message === "success") {
        return httpResponse.SUCCESS(res, addResponse.data);
      } else {
        return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
      }
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
};

export default controller;
