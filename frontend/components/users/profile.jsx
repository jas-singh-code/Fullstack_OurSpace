import React from 'react';
import Nav from '../nav/nav_container';
import { MdEdit, MdPhotoCamera } from 'react-icons/md';
import PhotosContainer from './photos_container'
import About from './about_container';
import UserPosts from './user_posts_container';
import AddFriendButton from '../friends/add_friend_button_container';
import { findRequestId } from '../../reducers/selectors';
import { findFriendshipId } from '../../reducers/selectors';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import CancleRequestContainer from '../friends/cancle_request_button_container';
import Timeline from './timeline_container';

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
            selected: 'Timeline'
        }
        this.updateBio = this.updateBio.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
        this.requested = this.requested.bind(this);
        this.friends = this.friends.bind(this);
        this.displayPage = this.displayPage.bind(this);
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
                <CancleRequestContainer userId={user.id}/>
            )
        }else if(this.friends()){
            requestButton = (
                <div className='friended'>
                    <BsFillPersonCheckFill />
                    <div>Friends</div>
                </div>
            )
        }else{
            requestButton = <AddFriendButton userId={user.id}/>
        }

        let selectedComponent;
        if(this.state.selected === 'Timeline'){
            selectedComponent = <Timeline user={user}/>
        }else if(this.state.selected === 'About'){
            selectedComponent = <About user={user} type={this.state.editAbout}/>
        }else if(this.state.selected === 'Photos'){
            selectedComponent = <PhotosContainer fullWidth={900} userId={user.id}/>
        }else if(this.state.selected === 'Posts'){
            selectedComponent = < UserPosts userId={user.id}/>
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
                        <div className='add-cover-photo'>
                            <MdPhotoCamera />
                            Add Cover Photo
                        </div>
                        <div className='add-profile-picture'>
                            <MdPhotoCamera />
                        </div>
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
                        <div className={ this.state.selected === 'Timeline' ? 'active-profile-button' : 'hover-properties-16'} onClick={() => this.displayPage('Timeline')}>Timeline</div>
                        <div className={ this.state.selected === 'About' ? 'active-profile-button' : 'hover-properties-16'} onClick={() => this.displayPage('About')}>About</div>
                        <div className='hover-properties-16' >Friends</div>
                        <div className={ this.state.selected === 'Photos' ? 'active-profile-button' : 'hover-properties-16'} onClick={() => this.displayPage('Photos')}>Photos</div>
                    </div>
                    {currentUser.id === user.id ?
                    <div className='profile-nav-right'>
                        <MdEdit />
                        <div onClick={() => this.setState({aboutEdit: true})}>Edit Profile</div>
                    </div>
                    :
                    <div className='profile-nav-right'>
                        {requestButton}
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