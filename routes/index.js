import express from "express";

// routes
import userRoute from "./user/index.js";

import employeeRoute from "./employee/index.js"

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/employee", employeeRoute);

export { protectedRouter, unProtectedRouter };
