import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const app=express();
dotenv.config();
app.use(bodyParser.json({limit:"60mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"60mb",extended:true})); 
app.use(cors());

// all route which is define in the routes folder will be accessible under the '/posts' URL prefix.
app.use('/posts',postRoutes);

console.log(process.env.MONGO_URL)
// const CONNECTION_URL='mongodb+srv://MemoriesProj:MemoriesProj321@cluster0.a62etvi.mongodb.net/?retryWrites=true&w=majority';
const PORT =process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT,()=>console.log(`server run :  ${PORT}`)))
.catch((error)=>console.log(error.message));
