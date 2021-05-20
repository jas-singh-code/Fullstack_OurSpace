import React from 'react';
import { getIncomingFriendRequests, findRequestId } from '../../reducers/selectors';

class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.getRequestIds = this.getRequestIds.bind(this);
        this.addFriend = this.addFriend.bind(this);
        this.declineRequest = this.declineRequest.bind(this);
    }

    addFriend(id){
        // const user = this.props.users[id];
        const friendship ={
            user_id: this.props.currentUser.id,
            friend_id: id
        }

        this.props.createFriendship(friendship);

    }

    declineRequest(id){
        const reqId = this.props.findRequestId(this.props.requests, id, this.props.currentUser.id);
        this.props.deleteFriendRequest(reqId);
    }

    getRequestIds(){
        const requestIds =  getIncomingFriendRequests(this.props.requests, this.props.currentUser.id)
        return requestIds;
    }

    render(){
        const {currentUser, requests, users} = this.props;

        const requestIds = this.getRequestIds();
        if(requestIds && requestIds.length != 0){
            let user;
            let friendReqNotif;
            friendReqNotif = requestIds.map( id => {
                user = users[id];
                <div className={`friendRequest${id}`}>
                    <div className='requester-info'>
                        <img src={user.profilePicture}></img>
                        <div>{user.firstName}</div>
                        <div>{user.lastName}</div>
                    </div>
                    <div className='request-actions'>
                        <div onClick={() => this.addFriend(id)}>Accept</div>
                        <div onClick={() => this.declineRequest(id)}>Decline</div>
                    </div>
                </div>
            })
        }

        return(
            <div className='notifications-full'>
                <div>Notifications</div>
                <div>{friendReqNotif}</div>
            </div>
        )
    }
}

export default Notifications;