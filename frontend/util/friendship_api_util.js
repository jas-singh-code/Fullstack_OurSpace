export const createFriendship = friendship => {
    return (
        $.ajax({
            url: '/api/friendships',
            method: 'POST', 
            data: { friendship }
        })
    )
}

export const deleteFriendship = friendshipId => {
    return (
        $.ajax({
            url: `/api/friendships/${friendshipId}`,
            method: 'DELETE'
        })
    )
}

export const allFriendships = () => {
    return (
        $.ajax({
            url: '/api/friendships',
            method: 'GET'
        })
    )
}