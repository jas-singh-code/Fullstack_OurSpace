import * as APIPosts from "../util/post_index_api_util";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const DELETE_POST = "DELETE_POST";

export const receivePost = ( post ) => ({  // can change to postId if needed
    type: RECEIVE_POST,
    post,
})

export const receivePosts = ( posts ) => ({
    type: RECEIVE_POSTS,
    posts,
})

export const deletePost = ( postId ) => ({
    type: DELETE_POST,
    postId,
})

// thunk action creators

export const fetchPosts = () => dispatch => (
    APIPosts.fetchPosts()
      .then(posts => dispatch(receivePosts(posts)))
)

export const updatePost = (post) => dispatch => (
    APIPosts.fetchPost(post)
      .then(post => dispatch(receivePost(post)))
)

export const deletePost = (post) => dispatch => (
    APIPosts.fetchPost(post)
      .then(post => dispatch(receivePost(post)))
)