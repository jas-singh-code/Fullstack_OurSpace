class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else 
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: ['Unable to find comment with that ID'], status: 404
        end
    end

    def index
        @comments = Comment.all.where(post_id: params["postId"])
        render :index
    end

    def comment_params
        params.require(:comment).permit(:body, :post_id)
    end
end
