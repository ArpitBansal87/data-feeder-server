import { createApi } from 'unsplash-js';
import Background from '../models/background';

require('isomorphic-fetch');

const serverApi = createApi({
  accessKey: 'mxCukNyN-nc6E7Mwtgzy9by5gBe0dvAJ0GuuzL1SZgQ',
});

const photoObj = async () => serverApi.photos.getRandom({
  query: 'Wallpapers, Nature',
});

const runBackgroundProgram = () => {
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

    const newBackgroundEntry = new Background({
      ...returnObj,
      createdAt: new Date().toISOString(),
    });

    await newBackgroundEntry.save();
  }, 1200000);
};

export default runBackgroundProgram;
