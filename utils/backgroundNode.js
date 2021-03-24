import { createApi } from 'unsplash-js';

import config from '../config';

require('isomorphic-fetch');

const serverApi = createApi({
  accessKey: config.ACCESS_KEY,
});

const photoObj = async () => serverApi.photos.getRandom({
  query: config.UNSPLASH_BACKGROUND_TYPE,
  orientation: 'landscape',
});

const runBackgroundProgram = (timeInterval, dbConnection) => {
  setInterval(async () => {
    const returnObj = await photoObj()
      .then((result) => {
        if (result.errors) {
          return { error: 'error value' };
        }
        const photo = result.response;
        return photo;
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line new-cap
    const newBackgroundEntry = new dbConnection.devDB.models.background({
      ...returnObj,
      createdAt: new Date().toISOString(),
    });

    await newBackgroundEntry.save();
  }, timeInterval);
};

export default runBackgroundProgram;
