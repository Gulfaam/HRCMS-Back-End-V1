import Joi from "joi";

export default {
  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  add: {
    body: Joi.object().keys({
      parameter: Joi.string().required().max(50),
      value: Joi.number().required(),
      date: Joi.date().iso().required(),
      remarks: Joi.string().max(500),
      employee_id: Joi.string().required().max(24),
      created_by_id: Joi.string().required().max(24),
      updated_by_id: Joi.string().required().max(24),
    }),
  },

  addMultiple: {
    bulk_performance: Joi.object().keys({
      parameter: Joi.string().required().max(50),
      value: Joi.number().required(),
      date: Joi.date().iso().required(),
      remarks: Joi.string().max(500),
      employee_id: Joi.string().required().max(24),
      created_by_id: Joi.string().required().max(24),
      updated_by_id: Joi.string().required().max(24),
    }),
  },

  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      parameter: Joi.string().max(50),
      value: Joi.number(),
      date: Joi.date().iso(),
      remarks: Joi.string().max(500),
      employee_id: Joi.string().required().max(24),
      created_by_id: Joi.string().required().max(24),
      updated_by_id: Joi.string().required().max(24),
    }),
  },
};
