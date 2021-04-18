import React from 'react';

export default ({message, author, photoURL, createdAt}) => {
    let image;
    // if(photoURL){
    //     image = photoURL
    // }
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <span>{author.first_name}, {createdAt}</span>
                <p>{message}</p>
            </li>
        </div>
    )
}