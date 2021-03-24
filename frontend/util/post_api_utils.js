export const getPosts = () => (
    $.ajax({
        method: "GET",
        url: "/api/posts",
    })
)

export const fetchPost = post => (  // can change to postId if needed
    $.ajax({
        method: "GET",
        url: "/api/posts",
        data: {post}
    })
)

export const createPost = post => (
    $.ajax({
        method: "POST",
        url: `/api/posts`,
        data: { post }
    })
)