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
    //*sending the otp also there along side jwt token
    let otp=otpgenretor();
      return { message: "success", token,otp };
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },
  forgot: async (body) => {
    try {
      const data = await UserModel.findOne({
         
      });
    //*sending the otp also there along side jwt token
    let otp=otpgenretor();
      return { message: "success", token,otp };
    } catch (error) {
      return { message: "error", data: "Invalid Email and Password!" };
    }
  },

  register: async (body) => {
    try {
      const savedData = await UserModel.create(body);
      let otp=otpgenretor();
      if (savedData) {
        return { message: "success", data: savedData , otp:otp};
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
      const savedData = await UserModel.findOne(body);
      //*generating the otp right now we aren't updating just finding that account and generating otp
      let otp=otpgenretor();
      if (savedData) {
        return { message: "success", data: savedData,otp};
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id,body) => {
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
