import joi from 'joi'


export default {
    id: {
        params: joi.object().keys({
            id: joi.string().required(),
        }),
    },

    body: {
       users:joi.array().items(joi.object().keys({
            email: joi.string().required().email(),
            password: joi.string().required(),
        })),
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
