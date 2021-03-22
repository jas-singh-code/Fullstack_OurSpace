@posts.each do |post| 
    json.set! post.id do
        json.message post.message
        json.posterId post.poster_id
        json.wallId post.wall_id
        json.postedOn post.created_at
        # json.likes do |like|
        #     json.like_id like.id
        #     json.user_id like.likable_type
        # end
    end
end
