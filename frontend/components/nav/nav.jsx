import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import { IoMdArrowDropdownCircle} from 'react-icons/io';
import { HiPlusCircle } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import Notifications from './notifications_container';
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs"
import { getIncomingFriendRequests } from '../../reducers/selectors';


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropDown: false,
            notifications: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
        this.getRequestIds = this.getRequestIds.bind(this);
    }

    showDropDown(feild){
        return (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[feild]: !this.state.dropDown});
        }
    }
    hideDropDown(feild){
        return (e) => {
            this.setState({[feild]: false});
        }
    }

    getRequestIds(){
        const requestIds =  getIncomingFriendRequests(this.props.requests, this.props.currentUser.id);
        return requestIds;
    }
 
    render(){
        // document.body.addEventListener("click", this.hideDropDown("dropDown"));
        const {currentUser, logout, create} = this.props;

        let requestCount = this.getRequestIds().length;
        if (requestCount.length > 0){
            requestCount = requestCount.length
        }else{
            requestCount = null;
        }
        
        return (
            <header className="nav-bar">
                <div className='nav-left'>
                    <Link to={'/home'} className='logo-holder'>
                        {/* <div className="logo-init">
                            Ourspace
                        </div> */}
                        <img className="logo-icon" src={logoiconURL}></img>
                    </Link>
                </div>


                <div className='nav-mid'>
                    <a className='nav-mid-1' href="https://github.com/jas-singh-code">
                        <FaGithub className='github-icon' style={{fontSize: '38px', color: '#1877f2'}}/>
                    </a>

                    <Link className="home-icon" to='/'>
                        <AiFillHome className="home-icon-html"/>
                    </Link>

                    <a className='nav-mid-2' href="https://www.linkedin.com/in/jaspreet-singh-software-engineer/">
                        <FaLinkedin className='LinkedIn-icon' style={{fontSize: '38px', color: '#1877f2'}}/>
                    </a>
                </div>


                <div className='nav-right'>
                    <Link to={`/users/${currentUser.id}`}>
                        <div className='user-profile-module'>
                            <img src={currentUser.profilePicture}>
                            </img>
                            <p>{currentUser.firstName}</p>
                        </div>
                    </Link>

                    <div className='nav-actions'>
                        <div className="create-icon" onClick={create}>
                            < HiPlusCircle />
                        </div>

                        <div className="notif-icon" onClick={() => this.setState({notifications: !this.state.notifications})}>
                            <MdNotifications/>
                        </div>
                        
                        <div className={requestCount ? 'notification-count' : 'display-none'}>
                            {requestCount}
                        </div>

                        <div autoFocus className={this.state.notifications ? 'notification-container' : 'display-none'} tabIndex='2' onBlur={() => this.setState({notifications: false})}>
                            <Notifications />
                        </div>
                        <div className="dropdown-acc" onClick={this.showDropDown("dropDown")} tabIndex="0" >
                            <IoMdArrowDropdownCircle className="dropdown-acc-icon" />
                        </div>
                        <ul id={ this.state.dropDown ? "arrow-drop" : "hide-drop"} tabIndex="0" onBlur={this.hideDropDown("dropDown")}>
                            <Link className='profile-link' to={`/users/${currentUser.id}`}>
                                <div className="profile-dropdown">
                                    <img className="large-profile-pic" src={currentUser.profilePicture}>
                                    </img>
                                    <div>
                                        <li className="dropdown-btn username">
                                            {currentUser.firstName} {currentUser.lastName}
                                        </li>
                                        <li className="dropdown-btn details">
                                            See Your Profile
                                        </li>
                                    </div>
                                </div>
                            </Link>
                            <li className='border-bottom'></li>
                            <li id='padding' className="dropdown-btn" onClick={logout}>
                                Logout
                            </li>
                        </ul>
                    </div>
{/* 
                    <div className="notif-back"></div>
                    <div className="create-back" onClick={create}></div>
                    <div className="arrow-back" onClick={this.showDropDown("dropDown")}></div> */}
                </div>


            </header>
        );
    };
}

export default Nav;


{/* <h1 className="logo"> Our Space</h1>
<div>
    <button className="logout-btn" onClick={logout}>Log out</button>
    <button onClick={bringHome}>
        <i className="fa fa-home" >Home</i>
    </button>
</div> */}