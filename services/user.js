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
      const data = await UserModel.find(query).limit(limit).skip(skip).sort(sort);

      return { message: "success", data };
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