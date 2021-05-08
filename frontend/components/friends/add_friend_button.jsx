import React from 'react';

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
            <div>
                <button onClick={this.addFriend}>Add Friend</button>
            </div>
        )
    }
}

export default AddFriendButton;