json.user do 
    json.user.id do 
        json.firstname user.first_name
        json.lastname user.last_name
        json.email user.email
        json.friends user.friends
    end
end

