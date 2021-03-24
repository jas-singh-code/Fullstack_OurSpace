@posts.each do |post|
    json.set! post.id do
        json.id post.id
        json.message post.message
        json.posterId post.poster_id
        json.wallId post.wall_id
        json.createdAt post.created_at
        json.author post.author.first_name
        # json.likes do |like|
        #     json.like_id like.id
        #     json.user_id like.likable_type
        # end
    end
end
