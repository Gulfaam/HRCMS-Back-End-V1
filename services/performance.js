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
};

export default PerformanceService;
