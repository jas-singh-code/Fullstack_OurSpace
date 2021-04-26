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

export const deleteComment = (commentId) => {
    return (
        $.ajax({
            url: `/api/comments/${commentId}`,
            method: 'DELETE'
        })
    )
}