import express from "express";
import PermissionService from "../services/permission.js";
import validate from "../middlewares/validate.js";
import schema from "../validations/permission.validation.js";
import authenticate from "../middlewares/authenticate.js";
import httpResponse from "../utils/httpResponse.js";

const router = express.Router();

router.post("/", authenticate, validate(schema.create), async (req, res) => {
  const addResponse = await PermissionService.create(req.body);
  if (addResponse.message === "success") {
    return httpResponse.CREATED(res, addResponse.data);
  } else if (addResponse.message === "failed") {
    return httpResponse.CONFLICT(res, addResponse.data);
  } else {
    return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
  }
});

router.get("/:id",authenticate, async (req, res) => {
  const addResponse = await PermissionService.getById(req.params.id)
  if (addResponse.message === "success") {
    return httpResponse.CREATED(res, addResponse.data);
  } else if (addResponse.message === "failed") {
    return httpResponse.CONFLICT(res, addResponse.data);
  } else {
    return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
  }
});
router.patch("/:id",authenticate,  async (req, res) => {
  const addResponse = await PermissionService.update(req.params.id, req.body);
  if (addResponse.message === "success") {
    return httpResponse.CREATED(res, addResponse.data);
  } else if (addResponse.message === "failed") {
    return httpResponse.CONFLICT(res, addResponse.data);
  } else {
    return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
  }
});
export default router;
