json.id post.id
json.message post.message
json.wallId post.wall_id
json.createdAt post.created_at
json.author post.author
if post.comments.length > 0
    json.comments do
        post.comments.each do |comment|
            json.set! comment.id do
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end
end
if post.photo.attached?
    json.photoURL url_for(post.photo)
end