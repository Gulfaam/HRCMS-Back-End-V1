import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import passwordHash from "password-hash";
import mongoose from "mongoose";
import { UserStatuses } from "../constants/user-constants.js";
const UserService = {
  getAll: async () => {
    try {
      const data = await UserModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await UserModel.findById(id);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      body.status = UserStatuses.REGISTERED;
			UserModel.create(body);
      const data = await UserModel.findOne({ email: body.email });
      if (data) {
        return { message: "failed", data: "User already exist" };
      }

      const hashedPassword = passwordHash.generate(body.password);
      body.password = hashedPassword;

      const savedData = await UserModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  

  update: async (id, body) => {
    try {
      const savedData = await UserModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await UserModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default UserService;
