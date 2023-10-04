import axios from 'axios';

const url = 'http://localhost:5000/posts';

//get data
export const fetchPosts = () => axios.get(url);

// post data
export const createPost = (newPost) => axios.post(url, newPost);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// pass the pramas for server
// patch method is useful when you want to update only specific fields.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
