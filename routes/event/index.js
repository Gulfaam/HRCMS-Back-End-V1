import express from "express";
import eventValidation from "../../validations/event.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import authenticate from "../../middlewares/authenticate.js";

const router = express.Router();
router.post("/", controllers.add);
router.get("/", controllers.getAll);
router.get("/:id", controllers.getById);
router.patch("/:id", controllers.updateById);
router.delete("/:id", controllers.deleteById);

export default router;
