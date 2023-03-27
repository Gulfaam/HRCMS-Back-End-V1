import Joi from "joi";

export default {

    id: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
    },
    add: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            role: Joi.string().valid('HR', 'Developer', 'Project Manager', 'Office Boy').required(),
            contact: Joi.string().required().max(50),
            email: Joi.string().email().required().max(50),
            address: Joi.string().required().max(50),
            status: Joi.string().valid('Active', 'Inactive').required(),
            cnic: Joi.string().required().max(50),
            joining_date: Joi.date().iso().required(),
            ending_date: Joi.date().iso().required(),
            created_date: Joi.date().iso().required(),
            updated_date: Joi.date().iso().required(),
            image: Joi.string(),
            date_of_birth: Joi.date().iso().required(),
            blood_group: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-').required(),

        }),
    },

    update: {
        params: Joi.object().keys({
            id: Joi.string().required(),
        }),
        body: Joi.object().keys({
            name: Joi.string(),
            role: Joi.string().valid('HR', 'Developer', 'Project Manager', 'Office Boy'),
            contact: Joi.string().max(50),
            email: Joi.string().email().max(50),
            address: Joi.string().max(50),
            status: Joi.string().valid('Active', 'Inactive'),
            cnic: Joi.string().max(50),
            joining_date: Joi.date().iso(),
            ending_date: Joi.date().iso(),
            created_date: Joi.date().iso(),
            updated_date: Joi.date().iso(),
            image: Joi.string(),
            date_of_birth: Joi.date().iso(),
            blood_group: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),

        }),
    },

}