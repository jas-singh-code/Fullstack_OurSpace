debugger
json.set! @post.id do
    json.message post.message
    json.author post.author
    json.wallId post.wall_id
    json.postedOn post.created_at
end
debugger