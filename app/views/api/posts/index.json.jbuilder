json.array! @posts do |post|
    json.set! post.id do
        json.title post.title
        json.message post.message
        json.poster_id post.poster_id
        json.posted_time post.created_at
        json.likes do |like|
            jon.like_id like.id
            json.user_id like.likable_type
        end
    end
end