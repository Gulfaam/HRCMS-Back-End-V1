const environment = {
  port: process.env.PORT || 2022,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/HRMS",
  email:process.env.email ||  "mongodb+srv://sameerijaz100:burak@cluster0.ddb6csg.mongodb.net/HRCMS?retryWrites=true&w=majority"
};

export default environment;
