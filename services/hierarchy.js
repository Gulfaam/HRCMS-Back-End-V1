import Hierarchy from "../models/Hierarchy.js";
import hierarchyModel from "../models/Hierarchy.js";

const hierarchy = {
  getAll: async () => {
    try {
      const data = await hierarchyModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }

  get: async (id)=>{
    try{
        const data = await hierarchyModel.findById(id);
        if(data){
        return { message: "success", data };
        }
        else {
            return { message: "failed", data };
        }
  },
    catch(error){
     return { message: "error", data: error.message };   
    }
  },

  add: async (body) => {
    try {
      const savedData = await hierarchyModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update:async (id,body)=>{
    try{
    
        const savedData=await hierarchyModel.findByIdAndUpdate(id,body);
        if (savedData) {
            return { message: "success", data: savedData };
          }
    }
    catch(error){
       return { message: "error", data: error.message };
    }
  }
};

export default hierarchy;
