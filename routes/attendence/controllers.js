import AttendenceService from "../../services/attendence.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      if (req.query.order) {
        var column = req.query.order[0];
        var order = req.query.order[1];
      }

      const limitHolder = req.query.limit;
      const skipHolder = req.query.skip;

      const obj = {};
      obj[column] = order;

      if (limitHolder && skipHolder) {
        var data = await AttendenceService.getByPagination(
          limitHolder,
          skipHolder
        );
        return httpResponse.SUCCESS(res, data.data);
      }
      if (typeof obj === "object") {
        var data = await AttendenceService.getByOrder(obj);
        return httpResponse.SUCCESS(res, data.data);
      } else {
        var data = await AttendenceService.getAll();
      }
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
    const addResponse = await AttendenceService.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },
  update: async (req, res) => {
    try{
    const addResponse = await AttendenceService.update(req.params.id, req.body, {new: true} );
    return httpResponse.SUCCESS(res, addResponse.data);
    }catch(error){
    return httpResponse.NOT_FOUND(res, error);
  }
  },
  delete: async (req, res) => {
    try {
      const addResponse = await AttendenceService.delete(req.params.id);
      return httpResponse.SUCCESS(res, addResponse.data);
    } catch (error) {
      return httpResponse.NOT_FOUND(res, error);
    }
  },
}

export default controller;
