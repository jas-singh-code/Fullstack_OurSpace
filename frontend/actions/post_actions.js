import * as APIPosts from "../util/post_api_utils";

export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";

const receivePostComments = (postId) => ({
    
})

const receivePost = ( post ) => ({  // can change to postId if needed
    type: RECEIVE_SINGLE_POST,
    post,
})

const deletePost = ( postId ) => ({
    type: DELETE_POST,
    postId,
})

export const clearPosts = () => {
    return ({
        type: CLEAR_POSTS
    })
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_POST_ERRORS,
        errors,
    }
}

const receivePosts = ( posts ) => ({
    type: RECEIVE_ALL_POSTS,
    posts,
})

// thunk action creators

export const fetchPosts = () => dispatch => {
    return APIPosts.getPosts()
      .then(posts => dispatch(receivePosts(posts)))
}

export const createPost = (post) => dispatch => {
    return (APIPosts.createPost(post)
      .then(post => (dispatch(receivePost(post))
      ), err => (
          dispatch(receiveErrors(err.responseJSON))
      ))
    )}

export const updatePost = (post) => dispatch => (
    APIPosts.fetchPost(post)
      .then(post => (dispatch(receivePost(post))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
)

export const destroyPost = (post) => dispatch => (
    APIPosts.fetchPost(post)
      .then(post => dispatch(deletePost(post)))
)