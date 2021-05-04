class Api::PostsController < ApplicationController
    # def wall
    #     @posts = Post.all.order(created_at: :asc).where.not(id: current_user.id)
    #     render "api/posts/wall"
    # end

    def index
        @posts = Post.all.order(created_at: :ASC)
        render :index
        #need to use .where( !id: current_user.id)
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render "api/posts/show"
        else
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
        params.require(:post).permit(:message, :photo, :poster_id)
    end
end
