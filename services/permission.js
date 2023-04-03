import PermissionModel from "../models/permission.js";
import mongoose from "mongoose";
const PermissionService = {
  create: async (body) => {
    try {
      const savedData = await PermissionModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      throw error;
    }
  },
  
}

export default PermissionService;
