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
    const addResponse = await PerformanceService.addMultiple(req.body);
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
      const query = {};
      if (req.query._id) {
        query._id = req.query._id;
      }
      if (req.query.parameter) {
        query.parameter = req.query.parameter;
      }
      if (req.query.value) {
        if (typeof req.query.value === "object") {
          if (req.query.value.gt) {
            query.value = { $gt: req.query.value.gt };
          }
          if (req.query.value.lt) {
            query.value = { $lt: req.query.value.lt };
          }
        } else {
          query.value = req.query.value;
        }
      }
      if (req.query.date) {
        query.date = req.query.date;
      }

      if (req.query.remarks) {
        query.remarks = req.query.remarks;
      }
      if (req.query.employee_id) {
        query.employee_id = req.query.employee_id;
      }
      if (req.query.created_by_id) {
        query.created_by_id = req.query.created_by_id;
      }
      if (req.query.updated_by_id) {
        query.updated_by_id = req.query.updated_by_id;
      }

      const sort = {};
      if (req.query.sort) {
        if (typeof req.query.sort === "object") {
          req.query.sort.forEach((element) => {
            if (element.startsWith("-")) {
              sort[element.substring(1)] = -1;
            } else {
              sort[element] = 1;
            }
          });
        } else {
          if (req.query.sort.startsWith("-")) {
            sort[req.query.sort.substring(1)] = -1;
          } else {
            sort[req.query.sort] = 1;
          }
        }
      }
      const limit = parseInt(req.query.limit) || 5;
      const skip = parseInt(req.query.skip) || 0;
      const data = await PerformanceService.getAll(limit, skip, sort);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const data = await PerformanceService.getById(req.params.id);
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
        return httpResponse.SUCCESS(res, addResponse.data);
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
