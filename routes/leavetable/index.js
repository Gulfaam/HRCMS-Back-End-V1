import express from "express";
import authValidation from "../../validations/leavetable.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/", authenticate,controllers.getAll)
router.post("/", authenticate,controllers.add);
router.get('/filter', authenticate,controllers.getByfiltration);
router.get('/:id', authenticate,controllers.getOneById);





export default router;    