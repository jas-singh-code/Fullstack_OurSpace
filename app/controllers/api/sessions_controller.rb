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
        else
            if @email
                render json: [password: "Invalid Password, try again"], status: 401
            else
                render json: [email_and_pass: "Invalid Email and Password"], status: 401
            end
        end
    end
    

    def destroy
        logout!
        render :destroy
    end

end
