import express from "express";
import UserService from "../services/user.js";
import CodeService from "../services/code.js";
import MessageService from "../services/message.js";
import { CodeVerificationUnProtectedIntents } from "../constants/code-verification-constant.js";
import validate from "../middlewares/validate.js";
import userValidationSchema from "../validations/user.validation.js";
import authenticate from "../middlewares/authenticate.js";

const router = express.Router();

router.post(
  "/signup",
  validate(userValidationSchema.register),
  async (req, res) => {
    try {
      const data = await UserService.signup(req.body);
      const code = await CodeService.generate({
        user_id: data._id,
        intent: CodeVerificationUnProtectedIntents.REGISTRATION,
      });


      MessageService.sendEmail({
      	message: `your code is ${code.code}`,
      	to: req.body.email,
      	subject: "Verify You Email",
      });

      res.status(201).json({ message: "user registered", data });
    } catch (error) {
      res.status(400).json(error);
    }
  }
);

router.post("/login", authenticate, async (req, res) => {
  const addResponse = await UserService.login(req.body);
  if (addResponse.message === "success") {
    return httpResponse.CREATED(res, addResponse.data);
  } else if (addResponse.message === "failed") {
    return httpResponse.CONFLICT(res, addResponse.data);
  } else {
    return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
  }
});

router.post(
  "/forget-password",
  validate(userValidationSchema.forgetPassword),
  async (req, res) => {
    try {
      const [user] = await UserService.findByFilter({ email: req.body.email });

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      const code = await CodeService.generate({
        user_id: user._id,
        intent: CodeVerificationUnProtectedIntents.FORGET_PASSWORD,
      });

      MessageService.sendEmail({
      	message: `your code is ${code.code}`,
      	to: req.body.email,
      	subject: "Reset Password",
      });

      res.status(201).json({ message: "Code mailed", 
      //code: code.code
     });

    } catch (error) {
      res.status(400).json(error);
    }
  }
),
  router.post(
    "/forget-password/update",
    validate(userValidationSchema.forgetPasswordUpdate),
    async (req, res) => {
      try {
        const code = await CodeService.validate({
          code: req.body.code,
          intent: CodeVerificationUnProtectedIntents.FORGET_PASSWORD,
        });
        const data = await UserService.update({
          _id: code.user_id,
          password: req.body.password,
        });

        res.status(201).json({ message: "Password Reset" });
      } catch (error) {
        res.status(400).send(error);
      }
    }
  );

export default router;