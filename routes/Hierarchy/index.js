import express from "express";
import authValidation from "../../validations/hierarchy.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate,controllers.getAll)
router.post("/", authenticate,validate(authValidation.add),controllers.add);
router.patch("/:id", authenticate,validate(authValidation.update),controllers.update);




export default router;