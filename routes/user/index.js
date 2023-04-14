import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", controllers.getAll);
router.post("/register", validate(authValidation.register), controllers.register);
router.post("/forgetpassword", validate(authValidation.forgetPassword), controllers.forgetpassword);
router.post("/login", validate(authValidation.login), controllers.login);
router.patch('/:id', authenticate, validate(authValidation.update), controllers.update);
router.delete('/:id', authenticate, validate(authValidation.id), controllers.delete);

export default router;
