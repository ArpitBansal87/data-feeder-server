import mongoose from 'mongoose';
import config from '../config';

const connectionBackground = mongoose.createConnection(
  config.MONGODB_CONNECTION_STRING,
  { useNewUrlParser: true },
);

connectionBackground.model('background', require('../models/background'));

export default { backgroundDB: connectionBackground };
