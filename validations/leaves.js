import Joi from "joi";

const validations ={ 
    id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},

  add: {
    body: Joi.object().keys({
        type: Joi.string().required(),
        employee_id: Joi.string().required(),
        balance:Joi.number().required(), 
        availed:Joi.number().required(),
        available:Joi.number().required(),
        pending:Joi.number().required()
  }),
},

  update: {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),

    body: Joi.object().keys({
        type: Joi.string().required(),
        employee_id: Joi.string().required(),
        balance:Joi.number().required(), 
        availed:Joi.number().required(),
        available:Joi.number().required(),
        pending:Joi.number().required()
    }),   
 } 
}

export default validations;