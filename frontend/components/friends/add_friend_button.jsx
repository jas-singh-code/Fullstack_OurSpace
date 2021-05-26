import React from 'react';
import {RiUserAddLine} from 'react-icons/ri';

class AddFriendButton extends React.Component{
    constructor(props){
        super(props);

        this.addFriend = this.addFriend.bind(this);

    }

    addFriend(){
        const request = {
            requester_id: this.props.currentUser.id,
            receiver_id: this.props.userId,
        }

        this.props.sendRequest(request);
    }

    render(){
        return(
            <div className='profile-friend-btn' onClick={this.addFriend}>
                <RiUserAddLine />
                <div className='add-friend'>Add Friend</div>
            </div>
        )
    }
}

export default AddFriendButton;