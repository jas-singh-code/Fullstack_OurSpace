json.set! :post.id do
    json.message post.message
    json.posterId post.poster_id
    json.wallId post.wall_id
    json.postedOn post.created_at
end