import express from "express";
import userRoute from "./user.js";
import jobRoute from "./job.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/job", jobRoute);

export { protectedRouter, unProtectedRouter };
