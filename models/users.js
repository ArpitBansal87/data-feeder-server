import { Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
  updatedAt: String,
});

module.exports = userSchema;
