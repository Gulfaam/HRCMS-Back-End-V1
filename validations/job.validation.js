import Joi from "joi";

const schema = {
  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },

  add: {
    body: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      stack: Joi.string().required(),
      contract: Joi.string().required(),
      salary_range: Joi.string().required(),
      experience_required: Joi.string().required(),
      applicant_ids: Joi.string(),
      interviewers_ids: Joi.string(),
      selected_candidate_id: Joi.string(),
    }),
  },

  update: {
    id: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      title: Joi.string(),
      description: Joi.string(),
      stack: Joi.string(),
      contract: Joi.string(),
      salary_range: Joi.string(),
      experience_required: Joi.string(),
      applicant_ids: Joi.string(),
      interviewers_ids: Joi.string(),
      selected_candidate_id: Joi.string(),
    }),
  },
};
export default schema;
