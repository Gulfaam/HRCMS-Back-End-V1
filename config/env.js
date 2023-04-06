const environment = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb+srv://sameerijaz100:burak@cluster0.ddb6csg.mongodb.net/HRCMS?retryWrites=true&",
  email:process.env.email || "mercurysols@gmail.com",
};

export default environment;
