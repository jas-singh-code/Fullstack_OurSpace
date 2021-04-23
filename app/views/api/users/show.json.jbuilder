# json.partial! "api/users/user", user: @user
json.id @user.id
json.firstName @user.first_name
json.lastName @user.last_name
json.email @user.email
json.gender @user.gender
json.birthday @user.birthday
json.occupation @user.occupation
json.location @user.location
json.education @user.education
if @user.profile_picture.attached?
    json.profilePicture url_for(@user.profile_picture)
end
if @user.cover_picture.attached?
    json.coverPicture url_for(@user.cover_picture)
end