import * as APIPosts from "../util/post_api_utils";

export const RECEIVE_SINGLE_POST = "RECEIVE_SINGLE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";

const receivePost = ( post ) => ({  // can change to postId if needed
    type: RECEIVE_SINGLE_POST,
    post,
})

const receivePosts = ( posts ) => ({
    type: RECEIVE_POSTS,
    posts,
})

const deletePost = ( postId ) => ({
    type: DELETE_POST,
    postId,
})

const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors,
})

// thunk action creators

export const fetchPosts = () => dispatch => (
    APIPosts.fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
)

export const createPost = (post) => dispatch => (
    APIPosts.createPost(post)
      .then(post => (dispatch(receivePost(post))
      ), err => (
          dispatch(receiveErrors(err.responseJSON))
      ))
)

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