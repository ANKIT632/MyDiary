// route handdler

import mongoose from "mongoose";
import PostMessage from "../models/postSchema.js";
export const getPosts=async(req,res)=>{
  try{
    // find method use for get data from db on specific condition and return array
    // here not apply condition in the find method that means find give all data(query).
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

// Update data :
export  const updatePost =async(req,res)=>{
  // extracting the id property from the object req.params and renaming it as _id.
  
const {id : _id}=req.params;
const post =req.body;
if(!mongoose.Types.ObjectId.isValid(_id)) 
  return res.status(404).send('No post with that id');

  const updatedPost=await PostMessage.findByIdAndUpdate(_id,{ ...post,_id},{new :true});
  res.json(updatePost);

}

// delete data.
export  const deletePost =async(req,res)=>{
  // extracting the id property from the object req.params and renaming it as _id.
  
const {id}=req.params;

if(!mongoose.Types.ObjectId.isValid(id) ) 
  return res.status(404).send('No post here');

  const updatedPost=await PostMessage.findByIdAndRemove(id);
  res.json({message:"Post delete succcessfull"});

}

// Like post
export  const likePost =async(req,res)=>{
  // extracting the id property from the object req.params and renaming it as _id.
  
const {id}=req.params;

if(!mongoose.Types.ObjectId.isValid(id) ) 
  return res.status(404).send('No post here');

  const post =await PostMessage.findById(id);
  const updatedPost=await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount+1},{new:true});
  res.json(updatePost);

}
