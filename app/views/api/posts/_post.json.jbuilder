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
if post.likes.length > 0
    json.likes do
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/likes', like: like
            end
        end
    end
end