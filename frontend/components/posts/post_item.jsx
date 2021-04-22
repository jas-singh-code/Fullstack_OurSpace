import React from 'react';
import {AiOutlineLike} from "react-icons/ai"
import {FaRegCommentAlt, FaToggleOff} from "react-icons/fa"

export default ({message, author, photoURL, createdAt}) => {
    let postImage;
    if(photoURL){
        postImage = 
        <img src={photoURL}></img>
    }else{
        postImage = ""
    }
    let userImage;
    // function toggle(icon){
    //     debugger;
    //     if(icon === 'like'){
    //        const btn = document.getElementsByClassName('like-icon');
    //        const p = document.getElementsByClassName('p-like');
    //        btn.classList.add("active-btn");
    //        p.classList.add('active-btn');
    //     }
    // }
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <div className="poster-info">
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
                            <AiOutlineLike className="like-icon" size="0.7g"/>
                            <p className="p-like">Like</p>
                        </div>
                    </span>
                    <span>
                        <div className="comments-btn">
                            <FaRegCommentAlt className="comment-icon" size="0.7g"/>
                            <p className='p-comment'>Comment</p>
                        </div>
                    </span>
                </div>
            </li>
        </div>
    )
}