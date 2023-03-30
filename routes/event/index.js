import express from "express";
import eventValidation from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
// router.post("/",[authenticate, validate(eventValidation.add)], controllers.add);
router.post("/", controllers.add);
// router.get("/", authenticate, controllers.getAll);

export default router;
