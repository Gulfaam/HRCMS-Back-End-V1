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
  getAll: async () => {
    try {
      const data = await PerformanceModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getOne: async (id) => {
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
