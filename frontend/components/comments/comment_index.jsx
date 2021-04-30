import React from 'react';


class CommentIndex extends React.Component{
    constructor(props){
        super(props);

    }

    // componentDidUpdate(){
    //     this.props.fetchPostComments(this.props.post.id)
    // }

    render(){
        const { post } = this.props;
        let allComments = '';
        if (post.comments){
            allComments = (
                Object.values(post.comments).map(comment => {
                    return(
                        <div key={comment.id} className="full-comment">
                            <img className="profile-pic" src={this.props.currentUser.profilePicture}></img>
                            <div className="comment-item">
                                <div className="comment-item-head">
                                    <div className="comment-author">{comment.author.firstName}</div>
                                    <div className="comment-body">{comment.body}</div>
                                </div>
                                <ul className="comment-actions">
                                    <li className="comment-like">Like</li>
                                    <li className="comment-time">{comment.created_at.slice(0, 10)}</li>
                                </ul>
                            </div>
                        </div>
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