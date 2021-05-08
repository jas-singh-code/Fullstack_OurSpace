import React from 'react';


// will only show up on notifications
class AcceptRequestButton extends React.Component{
    constructor(props){
        super(props);

        this.acceptRequest = this.acceptRequest.bind(this);

    }

    acceptRequest(){
        const friendship = {
            user_id: this.props.currentUser.id,
            friend_id: this.props.userId,
        }

        this.props.createFriendship(friendship);
    }

    render(){
        return(
            <div>
                <button onClick={this.acceptRequest}>Accept Request</button>
            </div>
        )
    }
}

export default AcceptRequestButton;