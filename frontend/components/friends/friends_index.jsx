import React from 'react';
import {RiUserUnfollowFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import RemoveFriendButton from './remove_friend_button_container';
import { findFriendshipId, getFriendships } from '../../reducers/selectors';

class FriendsIndex extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const {currentUser, users, user, allFriendships} = this.props;
        const friends = getFriendships(user.id, allFriendships);

        let allFriends;
        if(friends && friends.length > 0){
            allFriends = (
            friends.map(friendObj => {
                let user = users[friendObj.friend_id];
                let requestButton;

                if(findFriendshipId(this.props.allFriendships, currentUser.id, user.id)){
                    requestButton =(
                        <RemoveFriendButton user={user}/>
                    )
                }

                return(
                    <div className='friendObject' key={friendObj.id}>
                        <Link className='friend-identity' to={`/users/${user.id}`}>
                            <img className='friend-pic' src={user.profilePicture}></img>
                            <div>
                                <div className='friend-name'>
                                    <div className='firstname'>{user.firstName}</div>
                                    <div className='lastname'>{user.lastName}</div>
                                </div>
                                <div className='friend-location'>{user.location}</div>
                            </div>
                        </Link>
                        <div className='friendship-actions'>
                            {requestButton}
                        </div>
                    </div>
                )
            }))
        }
        return(
            <div className='friends-container-full'>
                Friends
                <div className='friends-index'>
                    {allFriends}
                </div>
            </div>
        )
    }
}

export default FriendsIndex;