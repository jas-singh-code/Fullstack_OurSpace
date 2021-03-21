class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
        render "api/posts/index"
    end

    def show
        @post = Post.find(params[:id])
        if @post
            render "api/posts/post"
        else 
            render json: @post.errors, status: 422
        end
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render "api/posts/post"
        else 
            render json: @post.errors
        end
    end

    # def update
    #     @post = Post.find(params[:id])
    #     if @post.update(post_params)
    #         render 
    # end

    def destroy
        @post = Post.find_by(params[:id])
        @post.destroy
    end

    def post_params
        params.require(:post).permit(:title, :message)
    end
end
