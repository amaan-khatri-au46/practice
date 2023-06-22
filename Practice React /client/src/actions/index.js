// Here We Will Basically Define a Action Type And Return The paylaod 
import axios from "axios";

// This is bascaily Async Function so This Need To Pass Through The Thunk Middleware... 
export const fetchStudent = async(dispatch) => {
   const resposne = await axios.get("https://jsonplaceholder.typicode.com/albums");
   dispatch({type: "FETCH_ALBUM", payload: resposne.data});
};