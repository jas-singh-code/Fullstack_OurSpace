import { connect } from 'react-redux';
import Info from './info';


const mSTP = (state, ownProps) => {
    return{
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        user: ownProps.user,
    }
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Info);