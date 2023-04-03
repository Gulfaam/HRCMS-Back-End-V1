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
  getById: async (id) => {
    try {
      const data = await PermissionModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      throw error;
    }
  },
};

export default PermissionService;
