import express from "express";
import miscValidation from "../../validations/misc.validation.js"
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/",  controllers.getAll);
router.post("/",  validate(miscValidation.add), controllers.add);
router.patch('/:id',   validate(miscValidation.update), controllers.update);
router.delete('/:id',  validate(miscValidation.id),  controllers.delete);

export default router;
