import express from "express";
import validate from "../../middlewares/validate.js";
import schema from "../../validations/permission.validation.js";
import authenticate from "../../middlewares/authenticate.js";
import controller from "./controller.js";

const router = express.Router();

router.post("/", authenticate, validate(schema.create), controller.add);
router.get("/:id", authenticate, controller.getById);
router.get("/", authenticate, controller.getAll);
router.patch("/:id", authenticate, controller.update);
router.delete("/:id", controller.delete);
export default router;
