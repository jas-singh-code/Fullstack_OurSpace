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
                    debugger;
                    return(
                        <div className="comment-item">
                            <div className="comment-item-body">{comment.body}</div>
                            <div>{comment.createdAt}</div>
                        </div>
                    )
                })
            )
        }
        return(
            <div>{allComments}</div>
        )
    }
}

export default CommentIndex;