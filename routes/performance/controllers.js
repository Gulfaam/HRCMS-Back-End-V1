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
  
};

export default controller;
