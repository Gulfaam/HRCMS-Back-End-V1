import express from "express";
import employeeValidation from "../../validations/employee.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/multer.js";

const router = express.Router();
router.get("/", controllers.getAll);
router.get("/:id", authenticate, validate(employeeValidation.id), controllers.getOne);
router.post("/", upload.single("image"), validate(employeeValidation.add), controllers.add);
router.delete("/:id", authenticate, validate(employeeValidation.id), controllers.delete);
router.patch("/:id", authenticate, upload.single("image"), validate(employeeValidation.update), controllers.update);

export default router;
