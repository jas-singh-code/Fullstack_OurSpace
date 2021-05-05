json.extract! comment, :id, :author_id, :post_id, :body, :created_at
json.author do
    json.partial! "api/users/user", user: comment.author
end
if comment.likes && !comment.likes.empty?
    json.likes do
        comment.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
else 
    json.likes Hash.new
end