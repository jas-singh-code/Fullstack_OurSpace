import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
// import { NavLink } from 'react-router-dom';

export default ({ currentUser, logout}) => {
    
    function bringHome(){
        return (<PostIndexContainer />)
    }
    return (
        <header className="nav-bar">
            <h1 className="logo"> Our Space</h1>
            <div>
                <button className="logout-btn" onClick={logout}>Log out</button>
                <button onClick={bringHome}>
                    <i className="fa fa-home" >Home</i>
                </button>
            </div>
        </header>    
    )
    
}