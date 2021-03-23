export const fetchPosts = () => (
    $.ajax({
        method: "GET",
        url: "/api/posts"
    })
)

export const fetchPost = post => (  // can change to postId if needed
    $.ajax({
        method: "GET",
        url: "/api/posts",
        data: {post}
    })
)

export const createPost = posterId => (
    $.ajax({
        method: "GET",
        url: `/api/users/${posterId}/posts`
    })
)