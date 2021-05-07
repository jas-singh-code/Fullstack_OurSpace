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
            gender: ''
        }

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
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;