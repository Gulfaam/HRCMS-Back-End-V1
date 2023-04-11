import PerformanceModel from "../models/performance.js";

const PerformanceService = {
  add: async (body) => {
    try {
      const savedData = await PerformanceModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  addMultiple: async (body) => {
    try {
      const savedData = await PerformanceModel.insertMany(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getAll: async (limit, skip, sort) => {
    try {
      const data = await PerformanceModel.find().limit(limit).skip(skip).sort(sort);;
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await PerformanceModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  update: async (id, body) => {
    try {
      const savedData = await PerformanceModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  delete: async (id) => {
    try {
      const savedData = await PerformanceModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default PerformanceService;
