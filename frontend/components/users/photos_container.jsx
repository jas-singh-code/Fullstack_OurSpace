import { connect } from 'react-redux';
import Photos from './photos';
import { editUser } from '../../actions/user_actions';
import { getPostsByAuthor } from '../../reducers/selectors';


const mSTP = (state, ownProps) => {
    // const id = ownProps.location.pathname.slice(7);
    // const userObj = state.entities.users[id];
    const toReturn = {
        currentUser: state.session.currentUser,
        errors: state.errors.postErrorsReducer,
        photoPosts: getPostsByAuthor(state.entities.posts, ownProps.userId).filter(post => post.photoURL),
        fullWidth: ownProps.fullWidth
    }
    return toReturn;
}

const mDTP = dispatch => {
    return {
        editUser: data => dispatch(editUser(data))
    }
}

export default connect(mSTP, mDTP)(Photos);