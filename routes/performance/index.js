import express from "express";
import PerformanceValidation from "../../validations/performance.validation.js"
import validate from "../../middlewares/validate.js";
import controller from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controller.getAll);
router.post("/", authenticate,  validate(PerformanceValidation.add), controller.add);
router.post("/bulk", authenticate, validate(PerformanceValidation.addMultiple), controller.addMultiple);
router.get("/:id", authenticate,  validate(PerformanceValidation.id), controller.getOneById);
router.patch('/:id', authenticate, validate(PerformanceValidation.update), controller.updateOneById);
router.delete('/:id', authenticate, validate(PerformanceValidation.id),  controller.deleteOneById);

export default router;
