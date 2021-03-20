const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGODB_CONNECTION_STRING:
    'mongodb+srv://databaseAdmin:Admin87@main.8qatj.mongodb.net/dev?authSource=admin&replicaSet=atlas-2mkdvy-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true',
  SECRET_KEY: 'some very secret key',
  PORT: process.env.PORT,
  BACKGROUND_TIME: process.env.BACKGROUND_TIME,
};
