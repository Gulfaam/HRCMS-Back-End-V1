import express from "express";
import attendenceValidation from "../../validations/attendence.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.post("/", authenticate, validate(attendenceValidation.add), controllers.add);
router.patch('/:id', authenticate,  validate(attendenceValidation.update), controllers.update);
router.delete('/:id', authenticate, validate(attendenceValidation.id),  controllers.delete);

export default router;
