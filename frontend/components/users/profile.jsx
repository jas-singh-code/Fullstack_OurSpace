import React from 'react';
import Nav from '../nav/nav_container';
import { MdEdit, MdPhotoCamera } from 'react-icons/md';
import PhotosContainer from './photos_container'
import About from './about_container';
import UserPosts from './user_posts_container';
import AddFriendButton from '../friends/add_friend_button_container';
import { findFriendshipId, getFriendships, findRequestId} from '../../reducers/selectors';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import {RiUserAddLine, RiUserUnfollowLine} from 'react-icons/ri';
import {FiUserMinus} from 'react-icons/fi';
import CancleRequestContainer from '../friends/cancle_request_button_container';
import Timeline from './timeline_container';
import Info from './info_container';
import Friends from '../friends/friends_index_container';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            occupation:'',
            education: '',
            location: '',
            email: '',
            bio: '',
            birthday: '',
            gender: '',
            edit: false,
            openEditor: false,
            editAbout: false,
            selected: 'Timeline',
            coverFile: null,
            profileFile: null,
            currentUserId: this.props.currentUser.id,
            friendsDropDown: false,
        }
        this.updateBio = this.updateBio.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
        this.requested = this.requested.bind(this);
        this.friends = this.friends.bind(this);
        this.displayPage = this.displayPage.bind(this);
        this.editCoverPhoto = this.editCoverPhoto.bind(this);
        this.editProfilePhoto = this.editProfilePhoto.bind(this);
        this.handleCoverFile = this.handleCoverFile.bind(this);
        this.handleProfileFile = this.handleProfileFile.bind(this);
        this.handleUnfriend = this.handleUnfriend.bind(this);
    }

    updateBio(e){
        return e => this.setState({
            bio: e.currentTarget.value,
        })
    }

    handleEdited(){
        const editedUser = {
            id: this.props.user.id,
            bio: this.state.bio
        };
        this.props.editUser(editedUser);
        this.setState({edit: false})
    }

    requested(){
        const id = findRequestId(this.props.requests, this.props.currentUser.id, this.props.user.id);
        if(id){
            return true;
        }else{
            return false;
        }
    }

    friends(){
        if(findFriendshipId(this.props.friends, this.props.currentUser.id, this.props.user.id)){
            return true;
        }else{
            return false;
        }
    }

    displayPage(component){
        this.setState({selected: component});
    }

    handleCoverFile(e){
        this.setState({coverFile: e.currentTarget.files[0]})
    }

    handleProfileFile(e){
        this.setState({profileFile: e.currentTarget.files[0]})
    }

    handleUnfriend(){
        const id = findFriendshipId(this.props.friends, this.props.currentUser.id, this.props.user.id);
        this.props.deleteFriendship(id);
        this.setState({friendsDropDown: false})
    }


    editCoverPhoto(e){
        e.preventDefault();
        let formData = new FormData();

        formData.append('user[id]', this.state.currentUserId);

        if(this.state.coverFile){
            formData.append('user[cover_picture]', this.state,coverFile)
        }

        this.props.updateUserPhoto(formData);
    }

    editProfilePhoto(e){
        e.preventDefault();
        const formData = new FormData();

        const editedUser = {
            id: this.props.currentUser.id,
            profile_picture: this.state,
        }
        this.props.editUser(editedUser);
    }

    render(){

        const {user, currentUser, friends} = this.props;

        const {firstName, lastName,
            bio, occupation,
            education, gender,
            birthday, email, coverPicture, profilePicture} = this.props.user;

        const currenUserEditView = this.state.edit ? 
            <div className="profile-editor">
                <form onSubmit={this.handleEdited} className='flex-row'>
                    <input onChange={this.updateBio()} defaultValue={bio}></input>
                </form>
                <div className="profile-edit-actions">
                    <div onClick={() => this.setState({edit: false})} className='edit-cancle'>Cancle</div>
                    <div onClick={this.handleEdited} className='edit-save'>Save</div>
                </div>
            </div>
            :
            <div className="profile-bio-noedit">
                <div className="bio">{bio ? bio : 'No bio yet. Click \'Add Bio\' below to add one.'}</div>
                <div onClick={() => this.setState({edit: true})}className="profile-edit-btn">{bio ? 'Edit' : 'Add Bio'}</div>
            </div>;

        let requestButton;
        if(this.requested()){
            requestButton = (      
                <div className='profile-friend-btn'>
                    <RiUserUnfollowLine />
                    <CancleRequestContainer userId={user.id}/>
                </div>              
            )
        }else if(this.friends()){
            requestButton = (
                <div className='friended' onClick={() => this.setState({friendsDropDown: !this.state.friendsDropDown})}>
                    <BsFillPersonCheckFill />
                    <div>Friends</div>
                </div>
            )
        }else if(!this.requested() && !this.friends()){
            requestButton = (
                <div className='profile-friend-btn' >
                    <RiUserAddLine />
                    <AddFriendButton userId={user.id}/>
                </div>
            )
        }

        let selectedComponent;
        if(this.state.selected === 'Timeline'){
            selectedComponent = <Timeline user={user}/>
        }else if(this.state.selected === 'About' && user.id === currentUser.id){
            selectedComponent = <About user={user} type={this.state.editAbout}/>
        }else if(this.state.selected === 'About' && user.id != currentUser.id){
            selectedComponent = <Info user={user}/>
        }else if(this.state.selected === 'Photos'){
            selectedComponent = <PhotosContainer fullWidth={900} userId={user.id}/>
        }else if(this.state.selected === 'Posts'){
            selectedComponent = < UserPosts userId={user.id}/>
        }else if(this.state.selected === 'Friends'){
            selectedComponent = < Friends user={user}/>
        };

        return(
            <div className="full-profile">
                <Nav />
                <div className='profile-head'>
                    <div className='profile-cover'>
                        <img src={coverPicture}></img>
                        <div className='profile-prof-pic'>
                            <img src={profilePicture}></img>
                        </div>
                        {user.id === currentUser.id ? 
                        <div className='edit-photos-holder'>
                            <form className='add-cover-photo' onClick={this.props.openUpdateCoverPhoto}>
                                <label className='add-cover-photo-label'>
                                    <MdPhotoCamera />
                                    Add Cover Photo
                                </label>
                            </form>
                            <div className='add-profile-picture' onClick={this.props.openUpdateProfilePhoto}>
                                <MdPhotoCamera />
                            </div>
                        </div>
                        :
                        ''
                        }
                    </div>
                    <div className='profile-bio-name'>
                        <div className='profile-name'>
                            {firstName} {lastName}
                        </div>
                        {user.id === currentUser.id ? 
                        currenUserEditView :
                        <div>
                            <div className="bio">{bio ? bio : 'No bio yet'}</div>
                        </div>
                        }
                    </div>
                </div>
                <div className='profile-nav'>
                    <div className='profile-nav-left'>
                        <div className={ this.state.selected === 'Timeline' ? 'active-profile-button' : 'hover-properties-16'}
                         onClick={() => this.displayPage('Timeline')}
                         style={this.state.selected === 'Timeline' ? {color: '#1877f2'} : {color: 'grey'} }>Timeline</div>

                        <div className={ this.state.selected === 'About' ? 'active-profile-button' : 'hover-properties-16'}
                         onClick={() => this.displayPage('About')}
                         style={this.state.selected === 'About' ? {color: '#1877f2'} : {color: 'grey'}}>About</div>

                        <div className={this.state.selected === 'Friends' ? 'active-profile-button' : 'hover-properties-16'} 
                        onClick={() => this.displayPage('Friends')}
                        style={this.state.selected === 'Friends' ? {color: '#1877f2'} : {color: 'grey'}}>Friends</div>

                        <div className={ this.state.selected === 'Photos' ? 'active-profile-button' : 'hover-properties-16'}
                         onClick={() => this.displayPage('Photos')}
                         style={this.state.selected === 'Photos' ? {color: '#1877f2'} : {color: 'grey'}}>Photos</div>
                    </div>
                    {currentUser.id === user.id ?
                    <div className='profile-nav-right'>
                        <div className='profile-edit' onClick={() => this.displayPage('About')}>
                            <MdEdit />
                            Edit Profile
                        </div>
                    </div>
                    :
                    <div className='profile-nav-right'>
                        <div className='request-btn'>
                            {requestButton}
                        </div>
                        <div className={ this.state.friendsDropDown ? 'friends-unfollow-dd' : 'display-none'} onClick={this.handleUnfriend}>
                            <RiUserUnfollowLine />
                            <div>Unfriend</div>
                        </div>
                    </div>
                    }
                </div>
                <div>
                    {/* <PhotosContainer userId={user.id}/> */}
                    {/* < UserPosts userId={user.id}/> */}
                    {/* <About user={user} type={this.state.editAbout}/> */}
                    {/* <Timeline user={user}/> */}
                    {selectedComponent}
                </div>
            </div>
        )
    }
}

export default Profile;