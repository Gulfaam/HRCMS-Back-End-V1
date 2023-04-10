import RoleModel from "../models/role.js";

const RoleService = {
  add: async (body) => {
    try {
      const savedData = await RoleModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAll: async () => {
    try {
      const data = await RoleModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getById: async (id) => {
    try {
      const data = await RoleModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  updateById: async (id, body) => {
    try {
      let data = await RoleModel.findOneAndUpdate(id, body);
      data = await RoleModel.findById(id); // to show the updated data
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  deleteById: async (id) => {
    try {
      const data = await RoleModel.findByIdAndDelete(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default RoleService;
