import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import passwordHash from "password-hash";
import mongoose from "mongoose";
import { UserStatuses } from "../constants/user-constants.js";
const UserService = {
  signup: async (body) => {
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

  login: async (body) => {
    try {
      const data = await UserModel.findOne({ email: body.email });

      if (!data) {
        return { message: "failed", data: "Email is wrong" };
      }

      const isVerified = passwordHash.verify(body.password, data.password);
    

      if (!isVerified) {
        return { message: "failed", data: "Password is wrong" };
      }

      delete data._doc.password;
      const token = jwt.sign(data._doc, "secretKey");
      if (token) {
        return { message: "success", data: { token } };
      } else {
        return { message: "error", data: "Token is not generated" };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

	findByFilter: async (query) => {
		try {
			return UserModel.find(query);
		} catch (error) {
			throw error;
		}
	},

	update: async ({ _id, password }) => {
		try {
			return UserModel.findOneAndUpdate({ _id }, { password });
		} catch (error) {
			throw error;
		}
	},
};

export default UserService;
