import mongoose from 'mongoose';
import config from '../config';

const connectionBackground = mongoose.createConnection(
  config.DEV_MONGODB_CONNECTION_STRING,
  { useNewUrlParser: true },
);

connectionBackground.model('background', require('../models/background'));
connectionBackground.model('users', require('../models/users'));

export default { devDB: connectionBackground };
