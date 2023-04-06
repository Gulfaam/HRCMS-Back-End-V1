import hierarchyModel from "../models/Hierarchy.js";

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
      const savedData = await hierarchyModel.create(body);
      return {savedData};
    } catch (error) {
      return { data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      const savedData = await hierarchyModel.findByIdAndUpdate(id, body);
      return {savedData};
    } catch (error) {
      return { data: error.message };
    }
  },
  
  delete: async (id) => {
    try {
      const savedData = await hierarchyModel.findByIdAndDelete(id, {
        new: true,
      });
      return savedData;
    } catch (error) {
      return { data: error.message };
    }
  },
};

export default hierarchy;
