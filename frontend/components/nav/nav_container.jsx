import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_action';
import Nav from './nav';


const mSTP = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        requests: state.entities.friendRequests,
        page: ownProps.page
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        create: () => dispatch(openModal('createPost'))
    }
}

export default connect (mSTP, mDTP)(Nav);