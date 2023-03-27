import express from "express";

// routes
import userRoute from "./user/index.js";
import attendenceRoute from "./attendence/index.js";
import miscRoute from "./misc/index.js";


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/attendence", attendenceRoute);
unProtectedRouter.use("/misc", miscRoute);


export { protectedRouter, unProtectedRouter };
