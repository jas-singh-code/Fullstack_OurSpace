export const postComment = comment => (
    $.ajax({
        method: 'POST',
        url: '/api/comments',
        data: { comment }
    })
)

export const editComment = comment => {
    return (
        $.ajax({
            url: `/api/comments/${comment.id}`,
            method: 'PATCH', 
            data: { comment }
        })
    )
}

export const postComments = postId => {
    return (
        $.ajax({
            url: '/api/comments',
            method: 'GET',
            data: { postId }
        })
    )
}

export const allComments = () => {
    return (
        $.ajax({
            url: '/api/comments',
            method: 'GET'
        })
    )
}

export const deleteComment = (commentId) => {
    return (
        $.ajax({
            url: `/api/comments/${commentId}`,
            method: 'DELETE'
        })
    )
}