import { combineReducers } from "redux";
import { fetchSongList, updateSong } from "./song";
import { fetchAlbumList } from "./albums";

// We Will Select The Song
export const reducers = combineReducers({
  selectSong: updateSong,
  songs: fetchSongList,
  albums: fetchAlbumList,
});  
