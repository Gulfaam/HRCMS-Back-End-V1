import express from "express";
import payroolValidation from "../../validations/Payroll.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.post("/", validate(payroolValidation.add), controllers.add);
router.get("/", controllers.getAll);
router.get("/:id", controllers.getOne);
router.delete("/:id", controllers.delete);

export default router;