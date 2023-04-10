import express from "express";
import schema from "../../validations/job.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controller.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.get("/", authenticate, controllers.getAll);
router.get("/:id", authenticate, validate(schema.id), controllers.getOne);
router.post("/", authenticate, validate(schema.add), controllers.add);
router.delete("/:id", authenticate, validate(schema.id), controllers.delete);
router.patch("/:id", authenticate, validate(schema.update), controllers.update);

export default router;
