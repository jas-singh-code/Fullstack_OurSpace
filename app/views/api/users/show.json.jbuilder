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
json.profilePicture @user.profile_picture
json.coverPicture @user.cover_picture