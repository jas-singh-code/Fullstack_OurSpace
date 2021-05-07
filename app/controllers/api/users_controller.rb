class Api::UsersController < ApplicationController

    def index
        @users = User.all
        # debugger
        render :index
    end

    def show
        @user = User.find_by_id(id: params[:id])
        if @user
            render :show
        else 
            render json @user.errors.full_messages, status: 422
        end
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors, status: 422
        end
    end

    def update
        @user = User.find_by_id(params[:id])
        if @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def author_ids
        params[:author_ids]
    end

    def user_params
        params.require(:user).permit(
         :first_name, :last_name, :email,
         :password, :birthday, :gender, 
         :location, :occupation, :education, :bio)
    end

end
