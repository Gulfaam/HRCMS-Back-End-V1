import UserModel from "../models/user.js";
import jwt  from "jsonwebtoken";
import otpgenretor from "../middlewares/optgeneretor.js"

const UserService = {
  login: async (body) => {
    try {
      const data = await UserModel.findOne({
        email: body.email,
        password: body.password,
      });
      const token = jwt.sign({ id: data._id }, "my_temporary_secret", {
      expiresIn: "1h",
    });
    //*sending the otp also there along side jwt toke
    let otp=otpgenretor();
      return { message: "success", token,otp };
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },
  register: async (body) => {
    try {
      const user = await UserModel.create(body);
      let otp=otpgenretor();
      if (user) {
        return { message: "success", data: user , otp:otp};
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

  forgot: async (body) => {
    try {
      console.log(body);
      const user = await UserModel.findOne(body);
      //*generating the otp right now we aren't updating just finding that account and generating otp
      let otp=otpgenretor();
      if (user) {
        return { message: "success", data: user,otp};
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id,body) => {
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
