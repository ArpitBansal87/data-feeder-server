import backGroundDetails from './background';

const resolvers = {
  Query: {
    ...backGroundDetails.Query,
  },
};

export default resolvers;
