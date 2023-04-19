import express from "express";
import userRoute from "./user/index.js";
import authRoute from "./user/auth.js"
import attendenceRoute from "./attendence/index.js";
import miscRoute from "./misc/index.js";
import payrollRoute from "./payroll/index.js"
import employeeRoute from "./employee/index.js"
import eventRoute from "./event/index.js";
import hierarchyRoute from "./Hierarchy/index.js";
import roleRoute from "./role/index.js"
import jobRoute from "./job/index.js";
import permissionRoute from "./permission/index.js";
import employeeRoute from "./employee/index.js";
import performanceRoute from "./performance/index.js"

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/payroll", payrollRoute);

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/employee", employeeRoute);
unProtectedRouter.use("/attendence", attendenceRoute);
unProtectedRouter.use("/misc", miscRoute);
unProtectedRouter.use("/payroll", payrollRoute);
unProtectedRouter.use("/event", eventRoute);
unProtectedRouter.use("/hierarchy", hierarchyRoute);
unProtectedRouter.use("/role", roleRoute);
unProtectedRouter.use("/job", jobRoute);
unProtectedRouter.use("/permission", permissionRoute);
protectedRouter.use("/user", userRoute);
protectedRouter.use("/employee", employeeRoute);
protectedRouter.use("/attendence", attendenceRoute);
protectedRouter.use("/misc", miscRoute);
protectedRouter.use("/event", eventRoute);
protectedRouter.use("/hierarchy", hierarchyRoute);
protectedRouter.use("/role", roleRoute);
protectedRouter.use("/job", jobRoute);
protectedRouter.use("/permission", permissionRoute);
protectedRouter.use("/performance", performanceRoute);

// Un-Protected Routes
unProtectedRouter.use("/auth", authRoute);

export { protectedRouter, unProtectedRouter };
