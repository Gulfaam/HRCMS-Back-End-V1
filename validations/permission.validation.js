import Joi from "joi";

const schema= {
	id: {
		params: Joi.object().keys({
			id: Joi.string().required(),
		}),
	},

	create: {
		body: Joi.object().keys({
			name: Joi.string().required(),
		}),
	},

};
export default schema;

