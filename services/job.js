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
      throw error;;
    }
  },}

export default JobService;
