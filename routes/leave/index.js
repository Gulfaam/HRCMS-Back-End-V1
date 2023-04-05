import express from "express";
import authValidation from "../../validations/leave.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/",authenticate,validate(authValidation.add),controllers.add);
router.get("/",authenticate,controllers.getAll);





export default router;