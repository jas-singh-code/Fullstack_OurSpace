import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import { IoMdArrowDropdownCircle} from 'react-icons/io';
import { HiPlusCircle } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropDown: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
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
 
    render(){
        // document.body.addEventListener("click", this.hideDropDown("dropDown"));
        const {currentUser, logout, create} = this.props;
        return (
            <header className="nav-bar">
                <div className="search-bar"></div>
                    <Link to={'/home'}>
                        <div className="logo-init">
                            Ourspace
                        </div>
                        <div className='logo-init-opc'></div>
                    </Link>
                <div className="home-icon">
                    <AiFillHome className="home-icon-html"/>
                </div>
                <Link to={`/users/${currentUser.id}`}>
                    <div className='user-profile-module'>
                        <img src={currentUser.profilePicture}>
                        </img>
                        <p>{currentUser.firstName}</p>
                    </div>
                </Link>
                <div className="create-icon" onClick={create}>
                    < HiPlusCircle />
                </div>

                <div className="notif-icon">
                    <MdNotifications/>
                </div>

                <div className="dropdown-acc" onClick={this.showDropDown("dropDown")} tabIndex="0" >
                    <IoMdArrowDropdownCircle className="dropdown-acc-icon" />
                </div>
                <div className="notif-back"></div>
                <div className="create-back" onClick={create}></div>
                <div className="arrow-back" onClick={this.showDropDown("dropDown")}></div>

                <ul id={ this.state.dropDown ? "arrow-drop" : "hide-drop"} tabIndex="0" onBlur={this.hideDropDown("dropDown")}>
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
                    <li className='border-bottom'></li>
                    <li id='padding' className="dropdown-btn" onClick={logout}>
                        Logout
                    </li>
                </ul>

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