import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt} from "react-icons/fa"

export default ({message, author, photoURL, createdAt}) => {
    let image;
     if(photoURL){
        image = 
        <img src={photoURL}></img>
    }else{
        image = ""
    }
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <span>{author.first_name}, {createdAt}</span>
                <p>{message}</p>
                <div className="photos">
                    {image}
                </div>
                <div className='module-holder'>
                    <span>
                        <div className="likes-btn">
                            <AiOutlineLike className="like-icon" size="0.7g"/>
                            <p>Like</p>
                        </div>
                    </span>
                    <span>
                        <div className="comments-btn">
                            <FaRegCommentAlt className="comment-icon" size="0.7g"/>
                            <p>Comment</p>
                        </div>
                    </span>
                </div>
            </li>
        </div>
    )
}