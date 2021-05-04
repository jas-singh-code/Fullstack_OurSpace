import { combineReducers } from 'redux';
import posts from "./post_reducer";
import comments from "./comments_reducer";
import likes from "./likes_reducer";

export default combineReducers ({
    // users,
    posts,
    comments,
    likes, 
    // friends
})