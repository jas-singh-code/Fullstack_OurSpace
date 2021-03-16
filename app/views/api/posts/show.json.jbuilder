json.posts do |post|
    json.set! do |post.id|
        json.extract! post, :title, :message
    end
end
