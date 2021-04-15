# 
json.set! @post.id do
    json.id post.id
    json.message post.message
    json.wallId post.wall_id
    json.createdAt post.created_at
    json.poster post.poster_id
    json.author post.author
    if post.photo.attached?
        json.photoURL url_for(post.photo)
    end
end
# 