# json.partial! "api/users/user", user: @user
json.id @user.id
json.firstName @user.first_name
json.lastName @user.last_name
json.email @user.email
json.gender @user.gender
json.birthday @user.birthday