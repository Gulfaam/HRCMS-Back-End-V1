import Joi from "joi";

const schema = {
    id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},
  add: {
    body: Joi.object().keys({
        time_in: Joi.string().required(),
        time_out: Joi.string().required(),
        status: Joi.string().valid('present', 'absent', 'leave', 'late').required(),
        date: Joi.date().iso().required(),
        updated_date: Joi.date().iso().required(),
        remarks: Joi.string().max(250),
        monthly_hours: Joi.number().required(),
        approved_date:Joi.string().required(),
        employee_id: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),

    body: Joi.object().keys({
        time_in: Joi.string(),
        time_out: Joi.string(),
        status: Joi.string(),
        date: Joi.date().iso(),
        updated_date: Joi.date().iso(),
        remarks: Joi.string(),
        monthly_hours: Joi.number(),
        approved_date:Joi.number().required(),
        employee_id: Joi.string().required(),
    }),
},
};

export default schema;
