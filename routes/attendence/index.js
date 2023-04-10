import express from "express";
import attendenceValidation from "../../validations/attendence.validation.js"
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/",  controller.getAll);
router.post("/", authenticate, validate(attendenceValidation.add), controller.add);
router.patch('/:id', authenticate,  validate(attendenceValidation.update), controller.update);
router.delete('/:id', authenticate, validate(attendenceValidation.id),  controller.delete);

export default router;
