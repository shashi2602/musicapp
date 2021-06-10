import http from "./http/HttpService";
import {HOME_SCREEN_CONTENT_URL,ALBUM_DETAILS,PLAYLIST_DETAILS,SONG_DETAILS} from "../constants/urls";

const getHomeContent = async() => {
  const {data} = await http.get(HOME_SCREEN_CONTENT_URL)
  return data
}

const getAlbumDetails = async(albumid) => {
    const {data:albums} = await http.get(ALBUM_DETAILS+albumid)
    return albums
}
 
const getPlaylistDetails= async(playlistid)=>{
  const {data:playlists}=await http.get(PLAYLIST_DETAILS+playlistid)
  return playlists
}

const getSongDetails=async(songid)=>{
  const {data:song}=await http.get(SONG_DETAILS+songid)
  return song
}

export default {
    getHomeContent,
    getAlbumDetails,
    getPlaylistDetails,
    getSongDetails
};