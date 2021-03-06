import { connect } from 'react-redux';
import About from './about';
import {editUser} from '../../actions/user_actions'


const mSTP = (state, ownProps) => {
    // const id = ownProps.location.pathname.slice(7);
    // const userObj = state.entities.users[id];
    const toReturn = {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        user: ownProps.user,
        type: ownProps.type
    }
    return toReturn;
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(About);