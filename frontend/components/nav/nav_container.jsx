import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';
import Nav from './nav';


const mSTP = state => {
    return{
        currentUser: state.session.currentUser
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect (mSTP, mDTP)(Nav);