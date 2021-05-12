import { connect } from 'react-redux';
import Timeline from './timeline';

const mSTP = (state, ownProps) => {
    return {
        userId: ownProps.userId
    }
}

const mSTP = (state, ownProps) => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}