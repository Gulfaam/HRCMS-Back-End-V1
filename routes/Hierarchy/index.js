import express from "express";
import authValidation from "../../validations/hierarchy.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate,controllers.getAll)
router.post("/", authenticate,validate(authValidation.add),controllers.add);
router.get('/:id', authenticate,validate(authValidation.id),controllers.getOneById);
router.delete('/:id',authenticate,validate(authValidation.id),controllers.deleteOneById);
router.patch('/:id',authenticate,validate(authValidation.id),controllers.updateOneById);




export default router;