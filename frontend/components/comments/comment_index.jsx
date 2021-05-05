import React from 'react';
import CommentItem from './comment_item';

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false,
            openModule: false
        };
    }

    render(){
        const { post } = this.props;
        let allComments = '';
        if (post.comments){
            allComments = (
                Object.values(post.comments).map(comment => {
                    return(
                        <CommentItem key={comment.id}
                         comment={comment} 
                         currentUser={this.props.currentUser}
                         deleteComment={this.props.deleteComment}
                         editComment={this.props.editComment}
                         users={this.props.users}
                         likes={this.props.likes}
                         createLike={this.props.createLike}
                         deleteLike={this.props.deleteLike}
                         />
                    )
                })
            )
        }
        return(
            <div className="all-comments">{allComments}</div>
        )
    }
}

export default CommentIndex;