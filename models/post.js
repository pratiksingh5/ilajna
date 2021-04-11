const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    likes:[{type: ObjectId,ref:"User"}],
    postedBy:{
        type: ObjectId,
        ref: "User"
    }
},{timestamps:true})

mongoose.model("Post",PostSchema)