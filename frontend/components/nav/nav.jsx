import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

export default ({ currentUser, logout}) => {
    
    function bringHome(){
        return (<PostIndexContainer />)
    }
    return (
        <header className="nav-bar">
            <h1 className="logo"> Our Space</h1>
            <div>
                <button onClick={logout}>Log out</button>
                <a onClick={bringHome}></a>
            </div>
        </header>    
    )
    
}