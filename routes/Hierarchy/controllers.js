import hierarchy from "../../services/hierarchy.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
    add: async (req, res) => {
      try{
      const addResponse = await hierarchy.add(req.body);
      if (addResponse.message === "success") {
        return httpResponse.CREATED(res, addResponse);
      } 
    }
    catch(error){
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
    },
}

export default controller; 