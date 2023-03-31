import express from "express";
import PerformanceValidation from "../../validations/performance.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.post("/",  validate(PerformanceValidation.add), controllers.add);
router.get("/",  controllers.getAll);
router.get("/:id",  validate(PerformanceValidation.id), controllers.getOne);


export default router;
