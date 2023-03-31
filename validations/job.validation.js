import Joi from "joi";

const schema= {
	id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},

	create: {
		body: Joi.object().keys({
			title: Joi.string().required(),
			description: Joi.string().required(),
			stack: Joi.string().required(),
			contract: Joi.string().required(),
			salary_range: Joi.string().required(),
			date_updated: Joi.string().required(),
			date_created: Joi.string().required(),
			experience_required: Joi.string().required(),
			applicant_ids: Joi.string(),
			interviewers_ids: Joi.string(),
			selected_candidate_id: Joi.string(),
		}),
	},

};
export default schema;

