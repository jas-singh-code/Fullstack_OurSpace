import React from 'react';
import { findRequestId } from '../../reducers/selectors';

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

    render(){
        return(
            <div>
                <button className='cancle-request' onClick={this.cancleRequest}>Cancle Request</button>
            </div>
        )
    }
}

export default CancleRequestButton;