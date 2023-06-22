import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbums } from "../actions";

export const Album = () => {
  const { albums } = useSelector((state) => state);
  console.log(albums)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  return <div>{albums.map(album => {
    return <div key={album.title}>{album.id}</div>
  })}</div>;
};
