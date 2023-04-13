

import leaveRequest from "../../services/leaveRequest.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  add: async (req, res) => {
    try{
      const addResponse = await leaveRequest.add(req.body,req.file.path);
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
  

  getOneById: async (req, res) => {
    try{
    const addResponse = await leaveRequest.getOnebyId(req.params.id);
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
      const data = await leaveRequest.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error.data);
    }
  },
  updateOneById:async (req,res) => {
    try{
      const path=req.file.path;
      const data =await leaveRequest.updateOneById(req.params.id,req.body,path,{new: true});
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

  deleteOneById:async (req,res) => {
    try{
      const data =await leaveRequest.deleteOneById(req.params.id);
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
