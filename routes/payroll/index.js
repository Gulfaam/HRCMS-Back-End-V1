import express from "express";
import payroolValidation from "../../validations/Payroll.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.post("/", validate(payroolValidation.add), controllers.add);
router.get("/", authenticate, controllers.getAll);
router.get("/:id", authenticate, validate(payroolValidation.id), controllers.getOneById);
router.delete("/:id", authenticate, validate(payroolValidation.id), controllers.deleteOneById);
router.patch("/:id", authenticate, validate(payroolValidation.update), controllers.updateOneById);

export default router;