import { Schema } from 'mongoose';

const backgroundSchema = new Schema({
  id: String,
  color: String,
  user: {
    first_name: String,
    last_name: String,
    name: String,
    links: {
      html: String,
    },
  },
  createdAt: String,
  urls: {
    full: String,
    raw: String,
    small: String,
    regular: String,
  },
});

module.exports = backgroundSchema;
