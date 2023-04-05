

import Joi from "joi";

const validations ={ 
  add: {
    body: Joi.object().keys({
        leave_type: Joi.string().required(),
        start_date: Joi.date().iso().required(),
        end_date: Joi.date().iso().required(),
        count:Joi.number().required(), 
        reason:Joi.string().required()
    }),
  },

}
console.log('hello');
export default validations;