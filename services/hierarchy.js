import Hierarchy from "../models/Hierarchy.js";
import hierarchyModel from "../models/Hierarchy.js";

const hierarchy = {
  getAll: async () => {
    try {
      const data = await hierarchyModel.find();
      return { data };
    } catch (error) {
      return { data:error.message };
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
  update: async (id, body) => {
    try {
      const data = await hierarchyModel.findByIdAndUpdate(id, body);
      return {data};
    } catch (error) {
      return { data: error.message };
    }
  },
  

  delete: async (id) => {
    try {
      const data = await hierarchyModel.findByIdAndDelete(id, {
        new: true,
      });
      return {data};
    } catch (error) {
      return { data: error.message };
    }
  },
};

export default hierarchy;
