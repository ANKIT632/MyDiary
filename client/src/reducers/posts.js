import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
//posts = []

// also use as initialise
//const initialState = {
//   data: [], 
//   loading: false,
//   error: null,
// };
// 
// all data provide from reducer.
const PostReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];

    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default PostReducer;