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
  getAll: async (limit, skip, query) => {
    try {
      const sort = {};
      if (query.sort) {
        if (typeof query.sort === "object") {
          query.sort.forEach((element) => {
            if (element.startsWith("-")) {
              sort[element.substring(1)] = -1;
            } else {
              sort[element] = 1;
            }
          });
        } else {
          if (query.sort.startsWith("-")) {
            sort[query.sort.substring(1)] = -1;
          } else {
            sort[query.sort] = 1;
          }
        }
      }
      const data = await PerformanceModel.find().limit(limit).skip(skip).sort(sort);;
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getOneById: async (id) => {
    try {
      const data = await PerformanceModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateOneById: async (id, body) => {
    try {
      const savedData = await PerformanceModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  deleteOneById: async (id) => {
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
