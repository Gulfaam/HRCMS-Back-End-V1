import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import optgeneretor from "../middlewares/optgeneretor.js";

const UserService = {
  login: async (req) => {
    try {
      const data = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      //*first checking if user exist then generating otp
      if (data !== "") {
        optgeneretor(req);
        const token = jwt.sign({ id: data._id }, "my_temporary_secret", {
          expiresIn: "1h",
        });
        return { message: "success", token };
      }
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },
  register: async (body) => {
    try {
      const user = await UserModel.create(body);
      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getAll: async () => {
    try {
      const data = await UserModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  forgot: async (req) => {
    try {
      const user = await UserModel.findOne({
        email: req.body.email,
      });
      if (user) {
        optgeneretor(req);
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id, body) => {
    try {
      const user = await UserModel.findByIdAndUpdate(id, body);
      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      if (user) {
        return { message: "success", data: user };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default UserService;
