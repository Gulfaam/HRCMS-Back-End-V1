import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      title: Joi.string().required(),
    }),
  },
};

export default schema;
