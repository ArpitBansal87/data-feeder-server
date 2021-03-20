const backGroundDetails = {
  Query: {
    getBackground: async (_source, { id }, { dataSources }) => {
      const latestBackground = await dataSources.backgroundDB.models.background.findOne().sort({
        createdAt: -1,
      });
      return latestBackground;
    },
  },
};

export default backGroundDetails;
