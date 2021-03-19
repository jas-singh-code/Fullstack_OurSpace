class Api::SessionsController < ApplicationController
    # before_action :require_logged_in, only:[:destroy]
    # before_action :require_logged_out, only:[:create]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else 
            render json: ["Invalid username/password combination"], status: 401
        end
    end
    

    def destroy
        logout!
        render :destroy
    end

end
