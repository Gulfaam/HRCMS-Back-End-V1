import express from "express";
import PerformanceValidation from "../../validations/performance.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.post("/", authenticate, validate(PerformanceValidation.add), controllers.add);
router.get("/", authenticate, controllers.getAll);
router.get("/:id", authenticate, validate(PerformanceValidation.id), controllers.getOne);
router.patch('/:id', authenticate,  validate(PerformanceValidation.update), controllers.update);
router.delete('/:id', authenticate, validate(PerformanceValidation.id),  controllers.delete);

export default router;
