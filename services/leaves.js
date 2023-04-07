import hierarchyModel from "../models/leave.js";

const hierarchy = {
  getAll: async () => {
    try {
      const data = await hierarchyModel.find();
      return { data };
    } catch (error) {
      return { error };
    }
  },

  get: async (id) => {
    try {
      const data = await hierarchyModel.findById(id);
      return { data };
    } catch (error) {
      return {data: error.message};
    }
  },

  add: async (body) => {
    try {
      const data = await hierarchyModel.create(body);
      return {data};
    } catch (error) {
      return { data: error.message };
    }
  },
};

export default hierarchy;
