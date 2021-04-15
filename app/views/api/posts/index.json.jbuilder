@posts.each do |post|
    json.posts do 
        json.set! post.id do 
            json.partial! 'api/posts/post', post: post
            if post.photo.attached?
                json.photo url_for(post.photo)
            end
        end
    end
end




# @posts.each do |post|
#     json.set! post.id do
#         json.id post.id
#         json.message post.message
#         json.posterId post.poster_id
#         json.wallId post.wall_id
#         json.createdAt post.created_at
#         json.author post.author.first_name
#         json.photoURL url_for(post.photo)

#         # json.likes do |like|
#         #     json.like_id like.id
#         #     json.user_id like.likable_type
#         # end
#     end
# end
