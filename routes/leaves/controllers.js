

import hierarchy from "../../services/leaves.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{
      const addResponse = await hierarchy.add(req.body);
      console.log(addResponse.savedData);
      if(addResponse.savedData===null || ''){
      return httpResponse.CONFLICT(res,addResponse.savedData);
      }
      else{
        return httpResponse.SUCCESS(res,addResponse)
      }
    }
    catch(addResponse) {
       return httpResponse.INTERNAL_SERVER_ERROR(res,addResponse.savedData)
  }
},
  

  get: async (req, res) => {
    try{
    const addResponse = await hierarchy.get(req.params.id);
    if(addResponse.data===null){
      return httpResponse.NOT_FOUND(res,addResponse.data);
    }
    else {
      return httpResponse.SUCCESS(res,addResponse.data);
    }
    }
    catch (error){
        return httpResponse.INTERNAL_SERVER_ERROR(res,addResponse.data);
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
