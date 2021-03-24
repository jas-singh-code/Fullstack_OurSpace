class Api::PostsController < ApplicationController
    def index
        # debugger
        @posts = Post.all
        render "api/posts/index"
        #need to use .where( !id: current)
    end

    # def show
    #     @post = Post.find(params[:id])
    #     if @post
    #         render "api/posts/post"
    #     else 
    #         render json: @post.errors, status: 422
    #     end
    # end

    def create
        @post = Post.new(post_params)
        # debugger
        @post.poster_id = current_user.id
        if @post.save
            # debugger
            render "api/posts/show"
        else
            # debugger
            render json: @post.errors
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render "api/posts/post"
        else 
            render json: @post.errors
        end
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])

        if @post && @post.destroy
            render "api/posts/index"
        end
    end

    private
    def post_params
        params.require(:post).permit(:message)
    end
end
