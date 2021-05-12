import { connect } from 'react-redux';
import Timeline from './timeline';

const mSTP = (state, ownProps) => {
    return {
        userId: ownProps.userId
    }
}

const mDTP = (dispatch) => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Timeline);