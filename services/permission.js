import PermissionModel from "../models/permission.js";
const PermissionService = {
  create: async (body) => {
    try {
      const savedData = await PermissionModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      } else {
        return { message: "error", data: {} };
      }
    } catch (error) {
      throw error;
    }
  },
  findByFilter: async (query) => {
    try {
      return PermissionModel.find(query);
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
  update: async (id, body) => {
    try {
      const savedData = await PermissionModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      } else {
        return { message: "error", data: {} };
      }
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const savedData = await PermissionModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      } else {
        return { message: "error", data: {} };
      }
    } catch (error) {
      throw error;
    }
  },
};
export default PermissionService;
