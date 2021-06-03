import {get} from './config';

PATH=process.env.HOME_SCREEN_CONTENT
const getNewAlbums = () =>
  get({
    url: getApiUrl(PATH),
  });


 const  NewAlbumService={
        getNewAlbums
  }

  export default NewAlbumService