class Api::UsersController < ApplicationController

    def index
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
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
