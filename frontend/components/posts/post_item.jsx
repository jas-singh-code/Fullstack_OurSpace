import React from 'react';

export default ({message, author, createdAt}) => {
    // debugger
    return (
        <div className="post-item-div">
            <li className="post-ltem-li">
                <span>{author.first_name}     Posted on:{createdAt}</span>
                <h3>{message}</h3>
            </li>
        </div>
    )
}