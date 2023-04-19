import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import transporterFun from "../middlewares/emailService.js";

const UserService = {
  login: async (body) => {
    try {
      const data = await UserModel.findOne({
        email: body.email,
        password: body.password,
      });
      if (data) {
        transporterFun(body.email)
      }
      const token = jwt.sign({ id: data._id }, "my_temporary_secret", {
        expiresIn: "1h",
      });
      return { message: "success", token };
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },
  register: async (body) => {
    try {
      const savedData = await UserModel.create(body);
      if (savedData) {
        transporterFun(body.email)
      }
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  forgetpassword: async (body) => {
    try {
      const savedData = await UserModel.findOne(body);
      if (savedData) {
        transporterFun(body.email)
      }
      if (savedData) {
        return { message: "success", data: "Otp has been send " };
      }
      else {
        return { message: "error", data: "Email is not valid" };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAll: async (limit, skip, query) => {
    try {
      const sort = {};if (query.sort) {
        const sortBy = typeof query.sort === "string" ? [query.sort] : query.sort;
        sortBy.forEach(s => {
          const sortOrder = s.startsWith('-') ? -1 : 1;
          sort[s.replace(/^-/, '')] = sortOrder;
        });
      }
      const data = await UserModel.find(query).limit(limit).skip(skip).sort(sort);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateOneById: async (id, body) => {
    try {
      const savedData = await UserModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  deleteOneById: async (id) => {
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
