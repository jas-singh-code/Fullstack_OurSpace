import React from 'react';
import { findRequestId } from '../../reducers/selectors';

class DenyRequestButton extends React.Component{
    constructor(props){
        super(props);

        this.cancleRequest = this.cancleRequest.bind(this);
    }

    cancleRequest(){
        const { requests } = this.props;
        const receiver_id = this.props.currentUser.id;
        const requester_id = this.props.userId;

        const requestId = findRequestId(requests,requester_id, receiver_id );

        this.props.deleteRequest(requestId); 
    }

    render(){
        return(
            <button onClick={this.cancleRequest}>Deny Request</button>
        )
    }
}

export default DenyRequestButton;