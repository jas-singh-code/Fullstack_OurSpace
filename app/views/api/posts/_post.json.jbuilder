json.set! :post.id do
    json.extract! post, :title, :message, :poster_id, :created_at, :post.likes
end