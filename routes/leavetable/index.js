import express from "express";
import authValidation from "../../validations/leavetable.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticate,controllers.getAll)
router.post("/", authenticate,validate(authValidation.add),controllers.add);
router.get('/filter', authenticate,validate(authValidation.id),controllers.get);
router.get('/type', authenticate,validate(authValidation.type),controllers.get);
router.get('/pending', authenticate,validate(authValidation.pending),controllers.get);





export default router;    