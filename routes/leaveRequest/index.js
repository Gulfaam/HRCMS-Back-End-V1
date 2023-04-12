import express from "express";
import authValidation from "../../validations/leaveRequest.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";
import upload from "../../middlewares/multer.js";

const router = express.Router();
router.get("/", authenticate,controllers.getAll);
router.post("/", authenticate,upload.single("attachment"),validate(authValidation.add),controllers.add);
router.get('/:id', authenticate,validate(authValidation.id),controllers.get);
console.log('yes');
router.patch('/:id',authenticate,upload.single("attachment"),validate(authValidation.update),controllers.update);
router.delete('/:id',authenticate,validate(authValidation.id),controllers.delete);






export default router;    