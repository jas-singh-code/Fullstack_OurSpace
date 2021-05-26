import React from 'react';
import {RiUserUnfollowFill} from 'react-icons/ri';

class FriendsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {currentUser, users, user} = this.props;
        const friends = user.friends;
        let allFriends;
        if(friends && friends.length > 0){
            allFriends = (
            friends.map(friendObj => {
                let user = users[friendObj.id];
                return(
                    <div className='friendObject'>
                        <div className='friend-identity'>
                            <img className='profile-pic' src={user.profilePicture}></img>
                            <div className='friend-name'>
                                <div className='firstname'>{user.firstName}</div>
                                <div className='lastname'>{user.lastName}</div>
                            </div>
                        </div>
                        <div className='friendship-actions'>
                            <RiUserUnfollowFill />
                            <div>Unfriend</div>
                        </div>
                    </div>
                )
            }))
        }
        return(
            <div className='friends-container-full'>
                {allFriends}
            </div>
        )
    }
}

export default FriendsIndex;