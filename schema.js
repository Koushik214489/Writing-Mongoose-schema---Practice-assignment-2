const mongoose = require('mongoose');

const UserName = new mongoose.Schema({
    Title: {
        type:String,
        unique:true,
        minlength:[5,'Title must be atleast 5 character long']
    },
    Content: {
        type:String,
        required:true,
        minlength:[50,'Content must be atleast 50 character long']
    },
    Author:{
        type:String,
    },
    Tags:{
        type:Array,
        default:['tech', 'coding'],
    },
    Category: {
        type: String,
        default:"General",
    },
    Likes: {
        type:Array,
    },
    CreatedAT:{
        type:Date,
        Default:Date.now,
        immutable:true,
    },
     UpdatedAt:{
        type:Date,
     },
     Comments:{
        Username:{
            type:String,
        },
        message:{
            type:String,
            required:true,
        },
        CommentedAt:{
            type:Date,
            Default:Date.now,
            immutable:true,
        },

     }
})
module.exports = mongoose.model('user', UserName);
