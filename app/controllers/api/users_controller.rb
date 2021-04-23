class Api::UsersController < ApplicationController

    def index
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.gender == "male"
            file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/def_pic_man.jpg')
            @user.profile_picture.attach(io: file, filename: def_pic_man)
        else
            file = open('https://ourspace-seeds.s3.us-east-2.amazonaws.com/def_pic_woman.jpg')
            @user.profile_picture.attach(io: file, filename: def_pic_woman)
        end

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors, status: 422
        end
    end

    def update

    end

    def destroy
    end

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :birthday, :gender)
    end

end
