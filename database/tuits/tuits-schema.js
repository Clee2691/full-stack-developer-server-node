import mongoose from 'mongoose';

const schema = mongoose.Schema({
    avatarImage: String,
    username: String,
    handle: String,
    time: String,
    caption: String,
    storyImage: String,
    storyTitle: String,
    storyCaption: String,
    siteLink: String,
    numComments: Number,
    numShares: Number,
    numLikes: Number,
    dislikes: Number
}, {collection: 'tuits'});

export default schema;