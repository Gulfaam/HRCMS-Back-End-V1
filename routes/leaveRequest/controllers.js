

import hierarchy from "../../services/leaverequests.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{
      console.log(req.path.file);
      const addResponse = await hierarchy.add(req.body,req.file.path);
      if(addResponse.savedData===null || ''){
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
        return httpResponse.INTERNAL_SERVER_ERROR(res,error.data);
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await hierarchy.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },
  update:async (req,res) => {
    try{
      const path=req.file.path;
      console.log('hello in the upadte section');
      const data =await hierarchy.update(req.params.id,req.body,path,{new: true});
      if(data.data===null){
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

  delete:async (req,res) => {
    try{
      const data =await hierarchy.delete(req.params.id);
      if(data.data===null){
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
