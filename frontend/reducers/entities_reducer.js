import { combineReducers } from 'redux';
import posts from "./post_reducer";
import comments from "./comments_reducer";
import likes from "./likes_reducer";
import users from "./users_reducer";

export default combineReducers ({
    users,
    posts,
    likes, 
    comments,
    // friends
})