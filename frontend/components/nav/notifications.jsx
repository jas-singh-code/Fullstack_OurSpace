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
        const reqId = findRequestId(this.props.requests, id, this.props.currentUser.id);
        this.props.deleteFriendRequest(reqId);
    }

    getRequestIds(){
        const requestIds =  getIncomingFriendRequests(this.props.requests, this.props.currentUser.id);
        return requestIds;
    }

    render(){
        const {currentUser, requests, users} = this.props;

        const requestIds = this.getRequestIds();
        let friendReqNotif;
        if(requestIds && requestIds.length != 0 && Object.values(users).length > 1){
            let user;
            friendReqNotif = (requestIds.map( id => {
                user = users[id];
                debugger;
                return(
                    <div className='friendRequest' key={id}>
                        <img className='requester-img' src={user.profilePicture}></img>
                        <div className='requester-info-action'>
                            <div className='requester-info'>
                                <div>{user.firstName}</div>
                                <div>{user.lastName}</div>
                            </div>
                            <div className='request-actions'>
                                <div onClick={() => this.addFriend(id)}>Accept</div>
                                <div onClick={() => this.declineRequest(id)}>Decline</div>
                            </div>
                        </div>
                    </div>
                )
            }))
        }
        

        return(
            <div className='notifications-full'>
                <div className='notifications-header'>Notifications</div>
                {friendReqNotif ? 
                    <div className='friend-requests'>
                        Friend Requests
                        {friendReqNotif}
                    </div>
                :
                'No new Notifications'
                }
            </div>
        )
    }
}

export default Notifications;