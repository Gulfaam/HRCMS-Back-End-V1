import Joi from "joi";

const validations ={ 
    id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},

  add: {
    body: Joi.object().keys({
        leave_type: Joi.string().required(),
        start_date: Joi.date().iso().required(),
        end_date: Joi.date().iso().required(),
        count: Joi.number().required(),
        attachment: Joi.string(),
        reason: Joi.string().required()
  }),
},

  update: {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),

    body: Joi.object().keys({
        leave_type: Joi.string().required(),
        start_date: Joi.date().iso().required(),
        end_date: Joi.date().iso().required(),
        count: Joi.number().required(),
        attachment: Joi.string(),
        reason: Joi.string().required()
    }),   
 } 
}

export default validations;
