import React from 'react';

export default ({message, posterId}) => {
    return (
        <li>
            <span>{posterId}</span>
            <h3>{message}</h3>
        </li>
    )
}