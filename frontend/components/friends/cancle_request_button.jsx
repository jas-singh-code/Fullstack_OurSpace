import React from 'react';
import { findRequestId } from '../../reducers/selectors';
import {RiUserUnfollowLine} from 'react-icons/ri';

class CancleRequestButton extends React.Component{
    constructor(props){
        super(props);

        this.cancleRequest = this.cancleRequest.bind(this);
    }

    cancleRequest(){
        const { requests } = this.props;
        const requester_id = this.props.currentUser.id;
        const receiver_id = this.props.userId;

        const requestId = findRequestId(requests,requester_id, receiver_id );

        this.props.deleteRequest(requestId); 
    }
// .profile-friend-button
    render(){
        return(
            <div className='cancle-request-button' onClick={this.cancleRequest}>
                <RiUserUnfollowLine />
                <div className='cr-text'>Cancle Request</div>
            </div>
        )
    }
}

export default CancleRequestButton;