import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"

export default ({message, author, photoURL, createdAt}) => {
    // debugger;
    let postImage;
    if(photoURL){
        postImage = photoURL
    }else{
        postImage = ""
    }
    let profilePic;
    if (author.profilePicutre){
        profilePic = author.profilePicture
    }else{
        if (author.gender === "male"){
            profilePic = def_pic_man
        }else{
            profilePic = def_pic_woman
        }
    }
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <div className="poster-info">
                    <img src={profilePic} className="profile-pic"></img>
                    <div className='poster-name-create'>
                        <span className='poster-name'>{author.first_name}</span>
                        <span>{createdAt}</span>
                    </div>
                </div>
                <p>{message}</p>
                <div className="photos">
                    <img src={postImage}></img>
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