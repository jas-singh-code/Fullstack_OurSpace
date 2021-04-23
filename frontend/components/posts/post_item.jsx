import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"

export default ({message, author, photoURL, createdAt}) => {
    // debugger;
    let postImage;
    if(photoURL){
        postImage = 
        photoURL
    }else{
        postImage = ""
    }
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <div className="poster-info">
                    <img src={}></img>
                    <span>
                        {author.first_name}
                    </span>
                </div>
                <span>{createdAt}</span>
                <p>{message}</p>
                <div className="photos">
                    {postImage}
                </div>
                <div className='module-holder'>
                    <span>
                        <div className="likes-btn" onClick={() => toggle('like')}>
                            <AiOutlineLike className="like-icon" size=""/>
                            <p className="p-like">Like</p>
                        </div>
                    </span>
                    <span>
                        <div className="comments-btn">
                            <FaRegCommentAlt className="comment-icon" size=""/>
                            <p className='p-comment'>Comment</p>
                        </div>
                    </span>
                </div>
            </li>
        </div>
    )
}