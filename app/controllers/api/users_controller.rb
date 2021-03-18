class UsersController < ApplicationController

    def index
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            render "api/users/show"
        else
            flash.now[:errors]= @user.errors.full_messages
        end
    end

    def update

    end

    def destroy
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
