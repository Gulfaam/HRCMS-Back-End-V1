import express from "express";

// routes
import userRoute from "./user/index.js";
import attendanceRoute from "./attendence/index.js";
import miscRoute from "./misc/index.js";
import eventRoute from "./event/index.js"
import hierarchyRoute from "./Hierarchy/index.js";
import leaveRoute from "./leave/index.js";


import employeeRoute from "./employee/index.js"

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
console.log('hello')
// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/employee", employeeRoute);
unProtectedRouter.use("/attendance", attendanceRoute);
unProtectedRouter.use("/misc", miscRoute);
unProtectedRouter.use("/event", eventRoute);
unProtectedRouter.use("/hierarchy", hierarchyRoute);
unProtectedRouter.use('/leave',leaveRoute);

export { protectedRouter, unProtectedRouter };
