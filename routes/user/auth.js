import express from "express";
import {authValidation,bulkUserschema} from "../../validations/user.validation.js";
import validate from "../../middlewares/validate.js";
import controllers from "./controllers.js";
import bulkUser from "../../middlewares/bulkUserValidator.js";

const router = express.Router();
router.post("/registers",(req,res,next)=>{ 
    console.log('hello world');
    bulkUser(bulkUserschema,req.body.users,res,next);
 }, controllers.register);
router.post("/forgetpassword", validate(authValidation.forgetPassword), controllers.forgetpassword);
router.post("/login", validate(authValidation.login), controllers.login);

export default router;
