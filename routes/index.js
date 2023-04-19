import express from "express";

// routes
import userRoute from "./user/index.js";
import attendenceRoute from "./attendence/index.js";
import miscRoute from "./misc/index.js";
import eventRoute from "./event/index.js";
import hierarchyRoute from "./Hierarchy/index.js";
import roleRoute from "./role/index.js"
import jobRoute from "./job/index.js";
import permissionRoute from "./permission/index.js";
import employeeRoute from "./employee/index.js";


const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes
protectedRouter.use("/employee", employeeRoute);
protectedRouter.use("/attendence", attendenceRoute);
protectedRouter.use("/misc", miscRoute);
protectedRouter.use("/event", eventRoute);
protectedRouter.use("/hierarchy", hierarchyRoute);
protectedRouter.use("/role", roleRoute);
protectedRouter.use("/job", jobRoute);
protectedRouter.use("/permission", permissionRoute);


// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);



export { protectedRouter, unProtectedRouter };
