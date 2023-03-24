import AttendenceService from "../../services/attendence.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await AttendenceService.getAll();
      return httpResponse.SUCCESS(res, data.data);
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
} catch (error) {
    return httpResponse.NOT_FOUND(res, error);
  }
    // if (addResponse.message === "success") {
    //   return httpResponse.SUCCESS(res, addResponse.data);
    // } else if (addResponse.message === "failed") {
    //   return httpResponse.CONFLICT(res, addResponse.data);
    // } else {
    //   return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    // }
  },
  delete: async (req, res) => {
    try {
        const addResponse = await AttendenceService.delete(req.params.id);   
        return httpResponse.SUCCESS(res, addResponse.data);  
    } catch (error) {
        return httpResponse.NOT_FOUND(res, error);
    }
    // if (addResponse.message === "success") {
    //   return httpResponse.SUCCESS(res, addResponse.data);
    // } else if (addResponse.message === "failed") {
    //   return httpResponse.CONFLICT(res, addResponse.data);
    // } else {
    //   return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    // }
  },
}

export default controller;
