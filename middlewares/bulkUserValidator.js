import Joi from "joi";
import httpResponse from "../utils/httpResponse.js";


const bulkUser =(schema,users,res,next)=>{
for (let i = 0; i < users.length; i++) {
    const {value, error} = schema.validate(users[i]);
    if (error) {
        const errorMessage = error.message;
        return httpResponse.BAD_REQUEST(res, errorMessage);
    }
}
return next();
}

export default bulkUser;