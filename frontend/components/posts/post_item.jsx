import React from 'react';

export default ({message, posterId}) => {
    return (
        <div>
            <li className="post-ltem-li">
                <span>{posterId}</span>
                <h3>{message}</h3>
            </li>
        </div>
    )
}