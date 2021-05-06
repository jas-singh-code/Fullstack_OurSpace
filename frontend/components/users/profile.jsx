import React from 'react';

class Profile extends React.Component{
    constructor(props){
        super(props);
        state={
            occupation:'',
            education: '',
            location: '',
            email: '',
            bio: '',
            birthday: '',
            gender: ''
        }
        this.getUserObject = this.getUserObject.bind(this);
    }

    getUserObject(userId){
        return this.props.users[userId];
    }

    render(){
        debugger;
        const {firstName, lastName,
             bio, occupation,
             education, gender,
             birthday, email} = this.getUserObject();
        return(
            <div className="full-profile">
                <div className='profile-head'>
                    <div className='profile-cover'>
                        <div className='profile-prof-pic'>Profile pic here</div>
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