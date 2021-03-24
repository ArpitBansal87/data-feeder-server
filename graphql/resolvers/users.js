import { compare, hash } from 'bcryptjs';
import { UserInputError } from 'apollo-server';
import * as User from '../../models/users';
import {
  validateRegisterInput,
  validateLoginInput,
} from '../../utils/validations';
import utils from '../../utils/utils';

module.exports = {
  Mutation: {
    login: async (_, { username, password }, { dataSources }) => {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await dataSources.devDB.models.users.findOne({ username });

      if (!user) {
        errors.general = 'User Not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong Credetnials';
        throw new UserInputError('Wrong Credetnials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    register: async (
      parent,
      {
        registerInput: {
          username, email, password, confirmPassword,
        },
      },
      { dataSources },
      info,
    ) => {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword,
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // TODO: Make sure user doenst already exist
      const user = await dataSources.devDB.models.users.findOne({ username });
      if (user) {
        throw new UserInputError('User name is taken', {
          errors: {
            username: 'This user name is taken',
          },
        });
      }

      // hash password and create an auth token
      const hashedPassword = await hash(password, 12);
      console.log('inside the hashedPassword: ');
      console.log(hashedPassword);

      // eslint-disable-next-line new-cap
      const newUser = new dataSources.devDB.models.users({
        email,
        username,
        password: hashedPassword,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = utils.generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
