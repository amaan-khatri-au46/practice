// import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectsong } from "../actions";
// import { selectsong } from "../actions";


export const SongList = () => {
  const {songs, selectSong} = useSelector((state)=> 
   state)
   
  // const songFromStore = useSelector((state) => {
  //   return state.songs;
  // });

  // const selectedSong = useSelector((state) => {
  //   return state.selectSong;
  // });

  console.log(selectSong);

  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex" }}>
      {songs.map((song) => {
        return (
          <div className="card" key={song.title}>
            <div>Name: {song.title}</div>
            <div>Duration: {song.duration}</div>
            <button
              onClick={() => {
                dispatch(selectsong(song));
              }}
            >
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
};
  