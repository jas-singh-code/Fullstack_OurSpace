import { connect } from 'react-redux';
import Timeline from './timeline';

const mSTP = (state, ownProps) => {
    return {
        user: ownProps.user
    }
}

const mDTP = (dispatch) => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Timeline);