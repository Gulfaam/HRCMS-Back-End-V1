import express from "express";
import PerformanceValidation from "../../validations/performance.validation.js"
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.post("/", authenticate,  validate(PerformanceValidation.add), controller.add);
router.get("/:id", authenticate,  validate(PerformanceValidation.id), controller.getById);
router.patch('/:id', authenticate, validate(PerformanceValidation.update), controller.update);
router.delete('/:id', authenticate, validate(PerformanceValidation.id),  controller.delete);

export default router;
