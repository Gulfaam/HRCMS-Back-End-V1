import Joi from "joi";

export default {

    id: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
    },
    add: {
        body: Joi.object().keys({
            basic_pay: Joi.number().required(),
            allowance: Joi.number().required(),
            loan: Joi.number().required(),
            increments_ids: Joi.array().required(),
            current_salary: Joi.number().required(),
            employee_id: Joi.string().required(),
            issuer_id: Joi.string().required(),
        }),
    },

    update: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
        body: Joi.object().keys({
            basic_pay: Joi.number().required(),
            allowance: Joi.number().required(),
            loan: Joi.number().required(),
            increments_ids: Joi.string().required(),
            current_salary: Joi.number().required(),
            employee_id: Joi.string().required(),
            issuer_id: Joi.string().required(),
        }),
    },

}