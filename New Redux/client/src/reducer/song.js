// There Could Be Multiple Type of Reducer
// So basically We Are Defining Them Here


export const updateSong = (prev = {}, action) => {
  switch (action.type) {
    case "SELECT_SONG": {
      return action.payload;
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return prev;
  }
};

// Dummy Data To fetch the Data
export const fetchSongList = () => {
  return [
    {
      title: "Song 1",
      duration: 20,
    },
    {
      title: "Jhalak 2 ",
      duration: 20,
    },
    {
      title: "Jhalak 3",
      duration: 30,
    },
  ];
};
