import React from 'react';
import PostIndexContainer from '../posts/post_index_container';
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dropDown: false,
        }
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
    }

    componentDidMount(){
        this.prop.currentUser();
    }

    showDropDown(feild){
        return (e) => {
            this.setState({[feild]: true});
        }
    }
    hideDropDown(feild){
        return (e) => {
            this.setState({[feild]: false});
        }
    }
 
    render(){
        const {currentUser, logout} = this.props;
        // document.body.addEventListener("click", () => {
        //     this.setState({[dropDown]: false})
        // });
        return (
            <header className="nav-bar">
                <div className="search-bar"></div>
                <Link to={'/home'}>
                    <div className="logo-init">
                        <img src={logoInitialsURL}></img>
                    </div>
                </Link>
                <div className="home-icon">
                    <AiFillHome className="home-icon-html"/>
                </div>
                <div>
                    <img>
                    </img>
                    <p>{currentUser.firstName}</p>
                </div>

                <div className="dropdown-acc" onMouseDown={this.showDropDown("dropDown")} onMouseUp={this.hideDropDown("dropDown")}>
                    <IoMdArrowDropdownCircle className="dropdown-acc-icon" />
                </div>


                <ul id={ this.state.dropDown ? "arrow-drop" : "hide-drop"}>
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
                    <li onClick={() => logout}>
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