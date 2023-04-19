import hierarchy from "../../services/hierarchy.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{
      const addResponse = await hierarchy.add(req.body);
      if(!addResponse.data){
      return httpResponse.CONFLICT(res,addResponse.data);
      }
      else{
        return httpResponse.SUCCESS(res,addResponse.data)
      }
    }
    catch(addResponse) {
       return httpResponse.INTERNAL_SERVER_ERROR(res,addResponse.data)
  }
},
  
  getOneById: async (req, res) => {
    try{
    const addResponse = await hierarchy.getOneById(req.params.id);
    if(!addResponse.data){
      return httpResponse.NOT_FOUND(res,addResponse.data);
    }
    else {
      return httpResponse.SUCCESS(res,addResponse.data);
    }
    }
    catch (error){
        return httpResponse.INTERNAL_SERVER_ERROR(res,error.data);
    }
  },
  
  getAll: async (req, res) => {
    try {
      const data = await hierarchy.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res,error.data);
    }
  },

  updateOneById:async (req,res) => {
    try{
      const data =await hierarchy.updateOneById(req.params.id, req.body);
      if(!data.data){
      return httpResponse.NOT_FOUND(res,data.data)
      }
      else{
        return httpResponse.SUCCESS(res,data.data);
      }
    }
    catch(error){
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },

  deleteOneById:async (req,res) => {
    try{
      const data =await hierarchy.deleteOneById(req.params.id);
      if(!data.data){
      httpResponse.NOT_FOUND(res,data.data);
      }
     else{
      return httpResponse.SUCCESS(res,data.data)
    }
  }
    catch(error){
      return httpResponse.INTERNAL_SERVER_ERROR(res,error.data);
    }
  }
}


export default controller;
