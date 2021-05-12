json.partial! "api/users/user", user: @user

json.friend_requests do
    @user.outgoing_friend_requests.each do |friend_request|
        json.set! friend_request.id do
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end

    @user.received_friend_requests.each do |friend_request|
        json.set! friend_request.id do 
            json.partial! 'api/friend_requests/friend_request', friend_request: friend_request
        end
    end
end

json.friendships do 
    @user.friendships.each do |friendship|
        json.set! friendship.id do 
            json.partial! 'api/friendships/friendship', friendship: friendship 
        end
    end
end