import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import transporterFun from "../../middlewares/emailService.js";

const router = express.Router();
router.get("/", controller.getAll);
router.post("/register", validate(authValidation.register), controller.register);
router.post("/forgetpassword", validate(authValidation.forgetPassword), controller.forgetpassword);
router.post("/login", validate(authValidation.login), controller.login);
router.patch('/:id', authenticate, validate(authValidation.update), controller.update);
router.delete('/:id', authenticate, validate(authValidation.id), controller.delete);

export default router;
