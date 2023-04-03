
import hierarchy from "../../services/hierarchy.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{ 
    const addResponse = await hierarchy.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse);
    } else if (addResponse.message === "failed") {
      return httpResponse.BAD_REQUEST(res, addResponse.data);
    }
   } 
   catch(error)
   {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
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
