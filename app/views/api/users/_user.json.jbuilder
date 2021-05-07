require 'open-uri'
json.id user.id
json.firstName user.first_name
json.lastName user.last_name
json.email user.email
json.gender user.gender
json.birthday user.birthday
json.occupation user.occupation
json.location user.location
json.education user.education
json.bio user.bio
if user.profile_picture.attached?
    json.profilePicture url_for(user.profile_picture)
else
    if user.gender == "male"
        file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/def_pic_man.jpg')
        user.profile_picture.attach(io: file, filename: "def_pic_man.jpg")
    elsif (user.gender == "female" || user.gender == "other")
        file2 = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/def_pic_woman.jpg')
        user.profile_picture.attach(io: file2, filename: "def_pic_woman.jpg")
    end
    json.profilePicture url_for(user.profile_picture)
end
if user.cover_picture.attached?
    json.coverPicture url_for(user.cover_picture)
else 
    file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/def_cover_pic.png')
    user.cover_picture.attach(io: file, filename: 'def_cover_pic.png')
    json.coverPicture url_for(user.cover_picture)
end