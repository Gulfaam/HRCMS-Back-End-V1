import express from "express";
import authValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";
import optgeneretor from "../../middlewares/optgeneretor.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.post("/register", validate(authValidation.register),optgeneretor,controllers.register,);
router.post("/login", validate(authValidation.login),controllers.login);
router.post("/forgot", validate(authValidation.forgot),controllers.forgot);
router.patch('/:id', authenticate,  validate(authValidation.update), controllers.update);
router.delete('/:id', authenticate, validate(authValidation.id),  controllers.delete);

export default router;
