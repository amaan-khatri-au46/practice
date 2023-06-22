// Action Createor is basically For Definingt the type
// Heere
import axios from "axios";

export const selectsong = (song) => {
  return (dispatch) => {
    // Payload Is Used To Send The Data To The Reducer
    dispatch({ type: "SELECT_SONG", payload: { song } });
  };
};

// THis is How We We actually
export const fetchAlbums = () => async (dispatch, getState) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
  dispatch({ type: "FETCH_ALBUM", payload: response.data });
};


