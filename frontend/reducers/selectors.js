export const findLike = (likes, likeable_id, likeable_type, user_id) => {
    for (let id in likes) {
        let like = likes[id];
        if(
            like.likeable_id === likeable_id &&
            like.likeable_type === likeable_type && 
            like.user_id === user_id
        ){
            return like;
        }
    }
    return false;
}

export const getPostsByAuthor = ( posts, author_id ) => {
	let result = [];
	for (let id in posts) {
		if (posts[id].posterId === parseInt(author_id)) {
			result.push(posts[id]);
		}
	}
	return result;
};

export const findRequestId = (requests, requesterId, receiverId) => {
    for (let id in requests){
        let request = requests[id];
        if (request.requester_id === requesterId && request.receiver_id === receiverId){
            return id
        }
    }
}

export const findFriendshipId = (friendships, user_id, friend_id) => {
    for (let id in friendships){
        let friendship = friendships[id];
        if (friendship.user_id === user_id && friendship.friend_id === friend_id){
            return id
        }
    }
}

export const getIncomingFriendRequests = (requests, receiverId) => {
    let result = [];
    for (let id in requests) {
        if (requests[id].receiver_id === parseInt(receiverId)) {
            result.push(requests[id].requester_id); // returns user id of requester
        }
    }
    return result;
}

export const getFriendships = (user_id, friendships) => {
    let result = [];
    for (let id in friendships) {
        if (friendships[id].user_id === parseInt(user_id)){
            result.push(friendships[id]);
        }
    }
    return result
}