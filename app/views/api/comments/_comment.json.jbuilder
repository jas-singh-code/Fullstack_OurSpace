json.extract! comment, :id, :author_id, :post_id, :body, :created_at
json.author do
    json.partial! "api/users/user", user: comment.author
end