class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render 'api/comments/show'
        else 
            render json: @comment.errors.full_messages, status: 400
        end
    end

    def comment_params
        params.require(:comment).permit(:body)
    end
end
