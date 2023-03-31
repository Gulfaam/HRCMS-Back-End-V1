import express from "express";
import userRoute from "./user.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

unProtectedRouter.use("/user", userRoute);

export { protectedRouter, unProtectedRouter };
