import express from "express";
import userRoute from "./user.js";
import jobRoute from "./job.js";
import permissionRoute from "./permission.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/job", jobRoute);
unProtectedRouter.use("/permission", permissionRoute);

export { protectedRouter, unProtectedRouter };
