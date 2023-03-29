import Joi from "joi";

export default {

    id: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
    },
    add: {
        body: Joi.object().keys({
            
            type: Joi.string().valid('employee', 'company').required(),
            title: Joi.string().required().max(100),
            cost: Joi.number().required(),
            quantity: Joi.number().required(),
            total_cost: Joi.number().required(),
            description: Joi.string().max(200),
            created_date: Joi.date().iso().required(),
            updated_date: Joi.date().iso().required(),
            employee_id: Joi.string().required().max(50),

        }),
    },

    update: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
        body: Joi.object().keys({
            type: Joi.string().valid('employee', 'company').required(),
            title: Joi.string().required().max(100),
            cost: Joi.number().required(),
            quantity: Joi.number().required(),
            total_cost: Joi.number().required(),
            description: Joi.string().max(200),
            created_date: Joi.date().iso().required(),
            updated_date: Joi.date().iso().required(),
            employee_id: Joi.string().required().max(50),
        }),
    },

}