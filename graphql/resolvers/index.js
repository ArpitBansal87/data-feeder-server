import backGroundDetails from './background';
import users from './users';

const resolvers = {
  Query: {
    ...backGroundDetails.Query,
  },
  Mutation: {
    ...users.Mutation,
  },
};

export default resolvers;
