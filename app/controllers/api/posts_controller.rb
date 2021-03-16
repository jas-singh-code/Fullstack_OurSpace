class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
    end

    def create
        @post = Post.new(post_parms)
        if @post.save
            render :show
        else 
            flash.now[:errors] = ['Title content cannot be blank']
        end
    end

    def destroy
        @post = Post.find_by(params[:id])
        @post.destroy
    end

    def post_params
        params.require(:post).permit(:title, :message)
    end
end
