debugger
json.set! @post.id do
    json.id post.id
    json.message post.message
    json.wallId post.wall_id
    json.createdAt post.created_at
end
debugger