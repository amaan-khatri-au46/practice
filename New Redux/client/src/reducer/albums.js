// It Will Receieved Type And Payload 

export const fetchAlbumList = (prev = [], action) => {
  switch (action.type) {
    case "FETCH_ALBUM": {
      return action.payload;
    }
    default:
      return prev;
  }
};


