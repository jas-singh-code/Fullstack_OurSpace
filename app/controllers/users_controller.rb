class UsersController < ApplicationController

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to users_url
        else
            flash.new[:errors]= @user.errors.fullmessages
            render :new
        end
    end

    def edit
    end

    def update
    end

    def destroy
    end

    def user_params
        params.require(:user).permit(:username, :password)
    end

end
