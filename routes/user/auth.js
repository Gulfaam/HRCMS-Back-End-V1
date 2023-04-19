import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";

const router = express.Router();
router.post("/register", validate(authValidation.register), controllers.register);
router.post("/forgetpassword", validate(authValidation.forgetPassword), controllers.forgetpassword);
router.post("/login", validate(authValidation.login), controllers.login);

export default router;
