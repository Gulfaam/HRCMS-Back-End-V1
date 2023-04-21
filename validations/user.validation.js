import joi from 'joi'

const authValidation= {
    id: {
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    Register:{
        body: joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required().max(12),
        }),
    },
    
    forgetPassword: {
        body: joi.object().keys({
            email: joi.string().required().email()
        }),
    },
    login: {
        body: joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required(),
        }),
    },

    update: {
        params: joi.object().keys({
            id: joi.string().required(),
        }),
        body: joi.object().keys({
            email: joi.string().email(),
            password: joi.string(),
        }),
    },
}
 const bulkUserschema = joi.object().keys({
        email: joi.string().email().required(),
        password: joi.string().required().max(12),
    });


export {authValidation,bulkUserschema};
