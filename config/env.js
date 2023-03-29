const environment = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/HRCMS",
  tokens: { jwtSecret: process.env.JWT_SECRET || "some secret" },
	messageService: {
		emailAddress: process.env.MESSAGE_SERVICE_EMAIL_ADDRESS || "dummy",
		emailPassword: process.env.MESSAGE_SERVICE_EMAIL_PASSWORD || "dummy",
		emailIsSecure: process.env.MESSAGE_SERVICE_EMAIL_SECURE === "1",
		emailHost: process.env.MESSAGE_SERVICE_EMAIL_HOST || "smtp.gmail.com",
		twilioAccountSid:
			process.env.MESSAGE_SERVICE_TWILIO_ACCOUNT_SID ||
			"THIS IS DUMMY, REPLACE WITH YOUR DEFAULT VALUES",
		twilioAuthToken:
			process.env.MESSAGE_SERVICE_TWILIO_AUTH_TOKEN ||
			"THIS IS DUMMY, REPLACE WITH YOUR DEFAULT VALUES",
		twilioSenderPhoneNumber:
			process.env.MESSAGE_SERVICE_TWILIO_SENDER_PHONE_NUMBER ||
			"THIS IS DUMMY, REPLACE WITH YOUR DEFAULT VALUES",
	},
};

export default environment;
