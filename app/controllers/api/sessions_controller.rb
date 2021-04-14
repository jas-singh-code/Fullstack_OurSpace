class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        @email = User.find_by_email(
            params[:user][:email]
        )

        if @user
            login!(@user)
            render "api/users/show"
        elsif @email
            render json: ["Invalid Password, try again"], status: 401
        else
            render json: ["Invalid Email and Password"]
        end
    end
    

    def destroy
        logout!
        render :destroy
    end

end
