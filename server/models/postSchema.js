import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },    

});

//  here we create the collection and PostMessage is the collection name with schema.
// it's a constructor function that you can use to create instances of documents (data entries) that conform to the structure defined in postSchema
const PostMessage =mongoose.model('PostMessage',postSchema);

export default PostMessage;

