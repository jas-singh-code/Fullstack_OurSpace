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
if post.likes && !post.likes.empty?
    json.likes do
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
    json.likers do
        post.likers.each do |liker|
            json.set! liker.id do
                json.liker_Id liker.id
                json.first_name liker.first_name
                json.last_name liker.last_name
            end
        end
        # json.array!(post.likers) do |liker|
        #     json.name liker.first_name
        #     json.id liker.id
        # end
    end
else 
    json.likes Hash.new
    json.likers Hash.new
end
json.liker_Ids Array.new