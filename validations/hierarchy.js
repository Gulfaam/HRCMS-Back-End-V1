import Joi from "joi";

const validations ={ 
    id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},

  add: {
    body: Joi.object().keys({
        created_date: Joi.date().iso().required(),
        updated_date: Joi.date().iso().required(),
        employee_id: Joi.string().required().max(24),
        team_lead_id:Joi.string().required().max(24), 
    }),
  },

  update: {
    params: Joi.object().keys({
        id: Joi.string().required(),
    }),

    body: Joi.object().keys({
        created_date: Joi.date().iso().required(),
        updated_date: Joi.date().iso().required(),
        employee_id: Joi.string().required().max(24),
        team_lead_id:Joi.string().required().max(24), 
    }),   
 } 
}

export default validations;