
import hierarchy from "../../services/hierarchy.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{
      const addResponse = await hierarchy.add(req.body);
      if(addResponse.savedData===null || ' '){
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

  update:async (req,res) => {
    try{
      const data =await hierarchy.update(req.params.id, req.body, {new: true});
      if(data.savedData===null){
      return httpResponse.NOT_FOUND(res,data)
      }
      else{
        return httpResponse.SUCCESS(res,data);
      }
    }
    catch(error){
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  delete:async (req,res) => {
    try{
      const data =await hierarchy.delete(req.params.id);
      if(data.savedData===null){
      httpResponse.NOT_FOUND(res,data);
      }
     else{
      return httpResponse.SUCCESS(res,data)
    }
  }
    catch(error){
      return httpResponse.NOT_FOUND(res, error);``
    }
  }
}

export default controller;
