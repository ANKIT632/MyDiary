// route handdler
import PostMessage from "../models/postSchema.js";
export const getPosts=async(req,res)=>{
  try{
    // find method use for get data from db on specific condition and return array
    const postMessage=await PostMessage.find();
    res.status(200).json(postMessage);
  }
  catch(error){
      res.status(404).json({message:error.message});
  }
}


// data save when add on fron-end end.
export const createPost=async(req,res)=>{
const post =req.body;
const newPost= new PostMessage(post);

try{
    await newPost.save();
    res.status(201).json(newPost);
}
catch(error){
    res.status(409).json({message:error.message});
}



}