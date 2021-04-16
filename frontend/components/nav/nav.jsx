import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
// import { NavLink } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

export default ({ currentUser, logout}) => {
    
    function bringHome(){
        return (<PostIndexContainer />)
    }

    return (
        <header className="nav-bar">
            <div className="search-bar"></div>
            <div className="logo-init" onClick={bringHome}>
                <img src={logoInitialsURL}></img>
            </div>
            <div className="home-icon">
                <AiFillHome className="home-icon-html"/>
            </div>
            <div>
                <img>
                </img>
                <p>{currentUser.firstName}</p>
            </div>

            <div className="dropdown-acc">
                <IoMdArrowDropdownCircle className="dropdown-acc-icon" />
            </div>


            <ul className="arrow-drop">
                <div>
                    <img className="profile-pic-lrg">
                    </img>
                    <li>
                        {currentUser.firstName} {currentUser.lastName}
                    </li>
                    <li>
                        See Your Profile
                    </li>
                </div>
                <li>
                    Logout
                </li>
            </ul>
            

            <ul className="create-drop">
                <li>
                    Create Post
                </li>
            </ul>
            <ul className="notifications">
                <li>
                    Notifications
                </li>
            </ul>
        </header>    
    )
    
}


{/* <h1 className="logo"> Our Space</h1>
<div>
    <button className="logout-btn" onClick={logout}>Log out</button>
    <button onClick={bringHome}>
        <i className="fa fa-home" >Home</i>
    </button>
</div> */}