import React from 'react';
import {RiUserUnfollowFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import RemoveFriendButton from './remove_friend_button_container';
import { findFriendshipId } from '../../reducers/selectors';

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
                let requestButton;

                if(findFriendshipId(this.props.allFriendships, currentUser.id, user.id)){
                    requestButton =(
                        <RemoveFriendButton user={user}/>
                    )
                }
                debugger;

                return(
                    <div className='friendObject' key={user.id}>
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
                {allFriends}
            </div>
        )
    }
}

export default FriendsIndex;