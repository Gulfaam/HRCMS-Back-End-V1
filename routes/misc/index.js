import express from "express";
import miscValidation from "../../validations/misc.validation.js"
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.post("/", authenticate,  validate(miscValidation.add), controller.add);
router.patch('/:id', authenticate,   validate(miscValidation.update), controller.update);
router.delete('/:id', authenticate,  validate(miscValidation.id),  controller.delete);

export default router;
