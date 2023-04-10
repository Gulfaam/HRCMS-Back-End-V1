import JobModel from "../models/job.js";
import mongoose from "mongoose";
const JobService = {
  create: async (body) => {
    try {
      const savedData = await JobModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      throw error;
    }
  },
  getById: async (id) => {
    try {
      const data = await JobModel.findById(id);
      return { message: "success", data };
    } catch (error) {
      throw error;
    }
  },

  getAll: async (id) => {
    try {
      const data = await JobModel.find();
      return { message: "success", data };
    } catch (error) {
      throw error;
    }
  },

  
  update: async (id, body) => {
    try {
      const savedData = await JobModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const savedData = await JobModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      throw error;
    }
  },
};


export default JobService;
