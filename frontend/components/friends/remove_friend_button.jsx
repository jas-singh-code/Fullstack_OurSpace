import React from 'react';
import { findFriendshipId } from '../../reducers/selectors';
import { RiUserUnfollowLine } from 'react-icons/ri';

class RemoveFriendButton extends React.Component{
    constructor(props){
        super(props);

        this.removeFriend = this.removeFriend.bind(this);
    }

    removeFriend(){
        const { friendships } = this.props;
        const userId = this.props.currentUser.id;
        const friendId = this.props.userId;

        const requestId = findFriendshipId(friendships, userId, friendId );

        this.props.deleteRequest(requestId); 
    }

    render(){
        return(
            <div className='remove-friend-button'>
                <RiUserUnfollowLine />
                <div className='rf-text' onClick={this.removeFriend}>Unfriend</div>
            </div>
        )
    }
}

export default RemoveFriendButton;