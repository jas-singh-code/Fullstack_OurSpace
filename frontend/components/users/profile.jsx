import React from 'react';
import Nav from '../nav/nav_container';


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
        }
        this.updateBio = this.updateBio.bind(this);
        this.handleEdited = this.handleEdited.bind(this);
    }

    updateBio(){
        return e => this.setState({
            bio: e.currentTarget.value
        })
    }

    handleEdited(){
        this.props.editUser({
            id: this.props.user.id,
            bio: this.state.bio
        });
        this.setState({edit: false})
    }

    render(){

        const {firstName, lastName,
             bio, occupation,
             education, gender,
             birthday, email, coverPicture, profilePicture} = this.props.user;
        return(
            <div className="full-profile">
                <Nav />
                <div className='profile-head'>
                    <div className='profile-cover'>
                        <img src={coverPicture}></img>
                        <div className='profile-prof-pic'>
                            <img src={profilePicture}></img>
                        </div>
                    </div>
                    <div className='profile-bio-name'>
                        <div className='profile-name'>
                            {firstName} {lastName}
                        </div>
                        {this.state.edit ? 
                        <div className="profile-editor">
                            <form>
                                <input onChange={this.updateBio} defaultValue={bio}></input>
                            </form>
                            <div className="profile-edit-actions">
                                <div onClick={() => this.setState({edit: false})} className='edit-cancle'>Cancle</div>
                                <div onClick={this.handleEdited} className='edit-save'>Save</div>
                            </div>
                        </div>
                        :
                        <div className="profile-bio-noedit">
                            <div className="bio">{bio}</div>
                            <div onClick={() => this.setState({edit: true})}className="profile-edit-btn">Edit</div>
                        </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;