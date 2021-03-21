const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MONGODB_CONNECTION_STRING: process.env.MONGO_DB_BACKGROUND_URL,
  SECRET_KEY: 'some very secret key',
  PORT: process.env.PORT,
  BACKGROUND_TIME: process.env.BACKGROUND_TIME,
  ACCESS_KEY: process.env.ACCESS_KEY,
  UNSPLASH_BACKGROUND_TYPE: process.env.UNSPLASH_BACKGROUND_TYPE,
};
