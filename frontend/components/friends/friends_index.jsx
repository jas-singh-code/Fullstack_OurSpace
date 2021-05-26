import React from 'react';
import {RiUserUnfollowFill} from 'react-icons/ri';

class FriendsIndex extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {friends, currentUser, users} = this.props;
        if(friends && Object.values(friends).length > 0){
            Object.values(friends).map(friendObj => {
                let user = users[friendObj.friend_id];
                return(
                    <div className='friendObject'>
                        <div>{user.profilePicture}</div>
                        <div>
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                        </div>
                        <div className='friendship-actions'>
                            <RiUserUnfollowFill />
                            <div>Unfriend</div>
                        </div>
                    </div>
                )
            })
        }
        return(
            <div>
                All Friends
            </div>
        )
    }
}

export default FriendsIndex;